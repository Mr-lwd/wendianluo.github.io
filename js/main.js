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
  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll(".nav-link"),
  );
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

  var reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  var motionToggle = document.getElementById("motion-toggle");
  var motionPreference = null;
  try {
    motionPreference = localStorage.getItem("wl-motion");
  } catch (e) {}
  var motionContext = null;
  var navObserver = null;
  var topObserver = null;
  function motionEnabled() {
    return !reduceQuery.matches && motionPreference !== "off";
  }
  function updateMotionLabel() {
    var zh = document.documentElement.lang === "zh-CN";
    var dict = window.I18N[zh ? "zh" : "en"];
    motionToggle.textContent =
      dict[motionEnabled() ? "motion.on" : "motion.off"];
    motionToggle.setAttribute("aria-pressed", String(motionEnabled()));
    motionToggle.disabled = reduceQuery.matches;
    document.documentElement.setAttribute(
      "data-motion",
      motionEnabled() ? "on" : "off",
    );
  }
  function splitName() {
    var name = document.querySelector(".hero-name");
    var label =
      window.I18N[document.documentElement.lang === "zh-CN" ? "zh" : "en"][
        "hero.name"
      ].trim();
    name.setAttribute("aria-label", label);
    var words =
      document.documentElement.lang === "zh-CN" ? [label] : label.split(/\s+/);
    name.replaceChildren();
    words.forEach(function (word) {
      var line = document.createElement("span");
      line.className = "name-line";
      line.setAttribute("aria-hidden", "true");
      var inner = document.createElement("span");
      inner.className = "name-word";
      inner.textContent = word;
      line.appendChild(inner);
      name.appendChild(line);
    });
  }
  function markSection(id) {
    sections.forEach(function (s) {
      var active = s.id === id;
      s.link.classList.toggle("is-active", active);
      if (active) s.link.setAttribute("aria-current", "location");
      else s.link.removeAttribute("aria-current");
    });
  }
  // Semantic navigation also works when GSAP is unavailable or motion is off.
  if ("IntersectionObserver" in window) {
    navObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) markSection(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach(function (s) {
      navObserver.observe(s.el);
    });
    topObserver = new IntersectionObserver(function (entries) {
      if (backToTop)
        backToTop.classList.toggle("is-visible", !entries[0].isIntersecting);
      if (entries[0].isIntersecting) markSection(null);
    });
    topObserver.observe(document.querySelector(".hero"));
  }
  if (backToTop)
    backToTop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: motionEnabled() ? "smooth" : "instant",
      });
    });
  function initMotion() {
    if (motionContext) {
      motionContext.revert();
      motionContext = null;
    }
    splitName();
    updateMotionLabel();
    if (!window.gsap || !window.ScrollTrigger || !motionEnabled()) return;
    gsap.registerPlugin(ScrollTrigger);
    motionContext = gsap.context(function () {
      var hero = gsap.timeline({ defaults: { ease: "power3.out" } });
      hero
        .from(".hero .eyebrow", { y: 18, opacity: 0, duration: 0.7 })
        .from(
          ".name-word",
          { yPercent: 110, rotate: 3, duration: 1.1, stagger: 0.13 },
          0.08,
        )
        .from(".hero-title", { y: 22, opacity: 0, duration: 0.8 }, 0.38)
        .from(
          ".hero-cta .btn",
          { y: 20, opacity: 0, duration: 0.7, stagger: 0.1 },
          0.55,
        )
        .from(
          ".portrait",
          { y: 55, rotation: -7, scale: 0.92, duration: 1.25 },
          0.15,
        )
        .from(
          ".orbit",
          { scale: 0.7, opacity: 0, duration: 1.4, stagger: 0.08 },
          0.3,
        );
      // A slow orbital path supports the connected-systems motif; it only runs on screen.
      var orbit = gsap.to(".orbit-three", {
        rotation: 360,
        duration: 70,
        repeat: -1,
        ease: "none",
        paused: true,
      });
      ScrollTrigger.create({
        trigger: ".hero",
        start: "top bottom",
        end: "bottom top",
        onToggle: function (self) {
          if (self.isActive) orbit.play();
          else orbit.pause();
        },
      });
      if (window.matchMedia("(min-width: 768px)").matches) {
        gsap.to(".hero-photo", {
          y: 65,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
      gsap.to(".reading-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.2,
        },
      });
      document
        .querySelectorAll(
          ".section-head,.about-summary,.about-interests,.project-subsection-head",
        )
        .forEach(function (el) {
          gsap.from(el, {
            y: 35,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 92%", once: true },
          });
        });
      document
        .querySelectorAll(".cards,.pub-list,.skills-grid,.honor-list,.timeline")
        .forEach(function (group) {
          Array.from(group.children).forEach(function (el, i) {
            gsap.from(el, {
              y: 45,
              opacity: 0,
              duration: 0.9,
              delay: (i % 2) * 0.1,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 94%", once: true },
            });
          });
        });
      // Give each research chapter a little depth as it arrives, without trapping scrolling.
      document.querySelectorAll("#research .card").forEach(function (el) {
        gsap.from(el, {
          scale: 0.94,
          x: 20,
          transformOrigin: "left center",
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "top 55%",
            scrub: 0.6,
          },
        });
      });
      document.querySelectorAll(".tl-node").forEach(function (el) {
        gsap.from(el, {
          scale: 0,
          duration: 0.65,
          ease: "back.out(2)",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        });
      });
      gsap.from(".footer-name", {
        y: 35,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".site-footer",
          start: "top 95%",
          once: true,
        },
      });
    });
  }
  if (motionToggle)
    motionToggle.addEventListener("click", function () {
      motionPreference = motionEnabled() ? "off" : "on";
      try {
        localStorage.setItem("wl-motion", motionPreference);
      } catch (e) {}
      initMotion();
    });
  reduceQuery.addEventListener("change", initMotion);
  document.addEventListener("visibilitychange", function () {
    if (window.gsap) gsap.globalTimeline.paused(document.hidden);
  });

  /* -------------------------------------------------------------------------
     Dark mode
     ------------------------------------------------------------------------- */
  function setTheme(theme) {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    try {
      localStorage.setItem("wl-theme", theme);
    } catch (e) {}
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var isDark =
        document.documentElement.getAttribute("data-theme") === "dark";
      setTheme(isDark ? "light" : "dark");
      themeToggle.setAttribute("aria-pressed", String(!isDark));
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
      if (el) {
        el.href = href;
        el.setAttribute("download", download);
      }
    });
    var footerCv = document.querySelector('[data-i18n="footer.cv"]');
    if (footerCv) {
      footerCv.href = href;
      footerCv.setAttribute("download", download);
    }
  }

  function applyLanguage(lang) {
    var dict =
      (window.I18N && window.I18N[lang === "zh-CN" ? "zh" : "en"]) || {};

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
    if (md && dict["meta.description"])
      md.setAttribute("content", dict["meta.description"]);

    if (langToggle) langToggle.textContent = lang === "zh-CN" ? "EN" : "中文";
    setCvHrefs(lang);
    setYear();
  }

  if (langToggle) {
    langToggle.addEventListener("click", function () {
      var current =
        document.documentElement.getAttribute("data-lang") === "zh-CN"
          ? "zh-CN"
          : "en";
      var next = current === "zh-CN" ? "en" : "zh-CN";
      if (motionContext) {
        motionContext.revert();
        motionContext = null;
      }
      applyLanguage(next);
      initMotion();
      if (window.ScrollTrigger) ScrollTrigger.refresh();
      try {
        localStorage.setItem("wl-lang", next);
      } catch (e) {}
    });
  }

  /* -------------------------------------------------------------------------
     Init — apply persisted language, set year, paint scroll state
     ------------------------------------------------------------------------- */
  var initialLang =
    document.documentElement.getAttribute("data-lang") === "zh-CN"
      ? "zh-CN"
      : "en";
  applyLanguage(initialLang);
  initMotion();
  if (themeToggle)
    themeToggle.setAttribute(
      "aria-pressed",
      String(document.documentElement.getAttribute("data-theme") === "dark"),
    );
  window.addEventListener("load", function () {
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  });
  window.addEventListener("beforeprint", function () {
    if (motionContext) {
      motionContext.revert();
      motionContext = null;
    }
  });
  window.addEventListener("afterprint", initMotion);
})();
