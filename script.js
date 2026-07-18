/* =====================================================================
   Portfolio — small progressive enhancements
   1. Mobile navigation toggle
   2. Close mobile nav when a link is clicked
   3. Scroll-reveal for elements marked .reveal
   4. Current year in footer
   ===================================================================== */

(function () {
  "use strict";

  /* ---- 1 & 2: Mobile nav ---- */
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".primary-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- 3: Scroll-reveal ---- */
  const revealables = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && revealables.length) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealables.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback: no observer support — just show everything
    revealables.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---- 4: Footer year ---- */
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
