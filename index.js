document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  // Toggle main mobile menu
  menuToggle?.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Dropdown toggle only for items that have dropdown
  document.querySelectorAll(".nav-links li.has-dropdown").forEach(li => {
    const toggle = li.querySelector(".dropdown-toggle");

    toggle?.addEventListener("click", e => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        e.preventDefault();
        e.stopPropagation();
        li.classList.toggle("active");
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", e => {
    if (!e.target.closest(".nav-links") && !e.target.closest("#menu-toggle")) {
      navLinks.classList.remove("show");
      document.querySelectorAll(".nav-links li.active").forEach(li =>
        li.classList.remove("active")
      );
    }
  });

  // Close after clicking a link
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
      document
        .querySelectorAll(".nav-links li.active")
        .forEach(li => li.classList.remove("active"));
    });
  });
});

// ===== Reusable Scroll Animation Function =====
function animateOnScroll(selector, visibleClass = 'visible', threshold = 0.2) {
  const elements = document.querySelectorAll(selector);
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(visibleClass);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold });

  elements.forEach(el => observer.observe(el));
}

// ===== Trigger Animations =====
animateOnScroll('.animate-on-scroll');
animateOnScroll('.animate-left, .animate-right');
animateOnScroll('.team-card', 'show');
animateOnScroll('.review-card', 'show');


