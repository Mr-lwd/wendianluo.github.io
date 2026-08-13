/* ============================================================================
   Wendian Luo — interactions: scroll-spy, reveal-on-scroll, mobile nav, back-to-top
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

    /* Close the drawer when a link is tapped */
    siteNav.addEventListener("click", function (e) {
      if (e.target.closest(".nav-link")) {
        siteNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });

    /* Close on Escape */
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && siteNav.classList.contains("is-open")) {
        siteNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* -------------------------------------------------------------------------
     Header shadow + back-to-top visibility
     ------------------------------------------------------------------------- */
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;

    if (header) header.classList.toggle("scrolled", y > 8);
    if (backToTop) backToTop.classList.toggle("is-visible", y > 640);

    /* Scroll-spy: highlight the nav link for the section in view */
    if (sections.length) {
      var current = sections[0].id;
      var probe = y + window.innerHeight * 0.32;

      sections.forEach(function (s) {
        if (probe >= s.el.offsetTop) current = s.id;
      });

      /* If near the very bottom, force the last section active */
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

  /* -------------------------------------------------------------------------
     Back-to-top
     ------------------------------------------------------------------------- */
  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* -------------------------------------------------------------------------
     Reveal-on-scroll (IntersectionObserver)
     ------------------------------------------------------------------------- */
  var revealables = document.querySelectorAll(".reveal, .section-head, .card, .tl-item, .pub-item, .skill-group, .honor-item");

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
     Footer year
     ------------------------------------------------------------------------- */
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* Initial paint */
  onScroll();
})();
