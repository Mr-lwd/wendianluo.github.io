/* ============================================================================
   Wendian Luo — interactions: scroll-spy, reveal-on-scroll, mobile nav,
   back-to-top, dark mode, and bilingual (EN / 中文) toggles
   ========================================================================== */
(function () {
  "use strict";

  /* Flag that JS is running — lets CSS gate reveal animations behind this class
     so content stays visible if scripting is unavailable. */
  document.documentElement.classList.add("js");

  var header = document.getElementById("site-header");
  var navToggle = document.getElementById("nav-toggle");
  var siteNav = document.getElementById("site-nav");
  var backToTop = document.getElementById("back-to-top");
  var yearEl = document.getElementById("year");
  var themeToggle = document.getElementById("theme-toggle");
  var langToggle = document.getElementById("lang-toggle");
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-link"));
  var sections = [];

  /* Collect anchor targets once */
  navLinks.forEach(function (link) {
    var id = link.getAttribute("href");
    if (id && id.charAt(0) === "#" && id.length > 1) {
      var el = document.getElementById(id.slice(1));
      if (el) sections.push({ id: id.slice(1), el: el, link: link });
    }
  });

  /* -------------------------------------------------------------------------
     Mobile nav toggle
     ------------------------------------------------------------------------- */
  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var open = siteNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    siteNav.addEventListener("click", function (e) {
      if (e.target.closest(".nav-link")) {
        siteNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && siteNav.classList.contains("is-open")) {
        siteNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* -------------------------------------------------------------------------
     Header shadow + back-to-top visibility + scroll-spy
     ------------------------------------------------------------------------- */
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;

    if (header) header.classList.toggle("scrolled", y > 8);
    if (backToTop) backToTop.classList.toggle("is-visible", y > 640);

    if (sections.length) {
      var current = sections[0].id;
      var probe = y + window.innerHeight * 0.32;

      sections.forEach(function (s) {
        if (probe >= s.el.offsetTop) current = s.id;
      });

      if (window.innerHeight + y >= document.documentElement.scrollHeight - 8) {
        current = sections[sections.length - 1].id;
      }

      sections.forEach(function (s) {
        s.link.classList.toggle("is-active", s.id === current);
      });
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });

  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* -------------------------------------------------------------------------
     Reveal-on-scroll (IntersectionObserver)
     ------------------------------------------------------------------------- */
  var revealables = document.querySelectorAll(
    ".reveal, .section-head, .card, .tl-item, .pub-item, .skill-group, .honor-item"
  );

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealables.forEach(function (el) { io.observe(el); });
  } else {
    revealables.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* -------------------------------------------------------------------------
     Dark mode
     ------------------------------------------------------------------------- */
  function setTheme(theme) {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    try { localStorage.setItem("wl-theme", theme); } catch (e) {}
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var isDark = document.documentElement.getAttribute("data-theme") === "dark";
      setTheme(isDark ? "light" : "dark");
    });
  }

  /* -------------------------------------------------------------------------
     Bilingual (EN / 中文)
     ------------------------------------------------------------------------- */
  var CV_EN = "assets/WendianLuo_Resume.pdf";
  var CV_ZH = "assets/WendianLuo_Resume_CN.pdf";

  function setYear() {
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  }

  function setCvHrefs(lang) {
    var isZh = lang === "zh-CN";
    var href = isZh ? CV_ZH : CV_EN;
    var download = isZh ? "WendianLuo_Resume_CN.pdf" : "WendianLuo_Resume.pdf";
    ["cv-nav", "cv-hero"].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) { el.href = href; el.setAttribute("download", download); }
    });
    var footerCv = document.querySelector('[data-i18n="footer.cv"]');
    if (footerCv) { footerCv.href = href; footerCv.setAttribute("download", download); }
  }

  function applyLanguage(lang) {
    var dict = (window.I18N && window.I18N[lang === "zh-CN" ? "zh" : "en"]) || {};

    document.documentElement.lang = lang;
    document.documentElement.setAttribute("data-lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (dict[k] != null) el.textContent = dict[k];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-html");
      if (dict[k] != null) el.innerHTML = dict[k];
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-aria");
      if (dict[k] != null) el.setAttribute("aria-label", dict[k]);
    });

    if (dict["meta.title"]) document.title = dict["meta.title"];
    var md = document.querySelector('meta[name="description"]');
    if (md && dict["meta.description"]) md.setAttribute("content", dict["meta.description"]);

    if (langToggle) langToggle.textContent = lang === "zh-CN" ? "EN" : "中文";
    setCvHrefs(lang);
    setYear();
  }

  if (langToggle) {
    langToggle.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-lang") === "zh-CN" ? "zh-CN" : "en";
      var next = current === "zh-CN" ? "en" : "zh-CN";
      applyLanguage(next);
      try { localStorage.setItem("wl-lang", next); } catch (e) {}
    });
  }

  /* -------------------------------------------------------------------------
     Init — apply persisted language, set year, paint scroll state
     ------------------------------------------------------------------------- */
  var initialLang = document.documentElement.getAttribute("data-lang") === "zh-CN" ? "zh-CN" : "en";
  applyLanguage(initialLang);
  onScroll();
})();
