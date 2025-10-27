// ===== Navbar Toggle =====
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle?.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// ===== Dropdown Toggle (Mobile) =====
document.querySelectorAll(".nav-links li").forEach(li => {
  const hasDropdown = li.querySelector(".dropdown");

  if (hasDropdown) {
    li.addEventListener("click", e => {
      e.preventDefault(); // stop link from navigating
      e.stopPropagation(); // stop bubbling
      li.classList.toggle("active");
    });
  }
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

