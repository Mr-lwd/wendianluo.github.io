# Portfolio design and deployment

## Audit and direction

Redesign mode: preserve. Existing content includes eight academic sections, bilingual copy, theme switch, CV downloads, and a personal portrait. Keep anchor IDs, navigation labels, research claims and all links. Original design: indigo, Playfair/Inter, circle portrait, repeated elevated panels; inferred dials 3/3/5. The original reveal observer and scroll listener provided little motion variety.

New direction: a research portfolio for academic readers and recruiters, with native CSS and a quiet technical language. DESIGN_VARIANCE 6, MOTION_INTENSITY 8, VISUAL_DENSITY 4. Retain indigo, use self-hosted Geist and JetBrains Mono, unify surfaces and badge palette, separate bibliography, timeline, projects and profile layouts. Panel corners 6px; controls pill-shaped. Layers: content 0, navigation 20, floating controls 30, skip link 40.

## Motion rationale

- Sequenced name, role, buttons, portrait: establishes the identity and primary action.
- Orbital paths and portrait parallax: suggest connected systems, matching the research subjects. Decorative paths are hidden from assistive technology; rotation pauses outside the hero.
- Research chapters: scale/position scrub introduces one research item at a time without scroll trapping.
- Section and bibliography entrances: establish reading order; timeline nodes mark chronology.
- Reading progress, navigation selection, button transforms: provide location and interaction feedback.
- User motion switch plus system reduced-motion remove motion and expose all content. No custom cursor, scroll hijack, or external runtime requests. Without JS all content remains readable.

## Dependencies

Vendored GSAP and ScrollTrigger 3.13.0 under js/vendor (standard GSAP license: https://gsap.com/standard-license/). Geist and JetBrains Mono from Fontsource 5.3.0; licenses included under assets/fonts. No build required.

## Deployment

Public source files: index.html, favicon.svg, css/, js/, assets/. Production serves a copy at /srv/resume via Caddy for https://res.wendiann.cn and port 9999. Synchronize those files after changes; do not publish .git, docs, or validation artifacts. Caddy is enabled at boot and renews its certificate automatically.

## Verified release (2026-09-11)

Published to https://res.wendiann.cn; source and production files match. Browser checks passed against the live HTTPS site: language/theme persistence, English/Chinese CV selection, navigation open/close and Escape, back-to-top, widths 320/390/820/1024/1440 without horizontal overflow, running hero animation, motion toggle cleanup, live system reduced-motion change, readable content without JavaScript or animation libraries, no browser errors or failed resources. Existing anchors, links and translation keys preserved. Desktop light/dark and mobile screenshots inspected.

Lighthouse mobile simulation from this server: performance 96, accessibility 100, best-practices 100, seo 100. largest-contentful-paint: 1.9 s; cumulative-layout-shift: 0.046; total-blocking-time: 210 ms. These are lab measurements, not field Core Web Vitals.

Backup: /home/ubuntu/site-backups/resume-before-taste-20260911.tar.gz. Port 9999 and the existing xyz site both returned 200 after deployment.
