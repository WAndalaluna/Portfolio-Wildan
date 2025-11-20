// Utility: safe element selection
const $ = (sel) => document.querySelector(sel);

// Mobile Menu Toggle & Accessibility
const mobileMenuButton = $("#mobile-menu-button");
const mobileMenu = $("#mobile-menu");
if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener("click", () => {
    const isHidden = mobileMenu.classList.toggle("hidden");
    mobileMenuButton.setAttribute("aria-expanded", String(!isHidden));
  });
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      mobileMenuButton.setAttribute("aria-expanded", "false");
    });
  });
}

// Header shadow & active section highlighting
const header = $("#header");
const sections = Array.from(document.querySelectorAll("main section"));
const navLinks = Array.from(document.querySelectorAll("nav a[href^='#']"));

function setActiveLink() {
  const scrollPos = window.scrollY + window.innerHeight / 3;
  let currentId = "home";
  sections.forEach((sec) => {
    if (scrollPos >= sec.offsetTop) currentId = sec.id;
  });
  navLinks.forEach((l) => {
    if (l.getAttribute("href") === `#${currentId}`) {
      l.classList.add("text-white");
    } else {
      l.classList.remove("text-white");
    }
  });
}

window.addEventListener("scroll", () => {
  if (header) {
    if (window.scrollY > 50) header.classList.add("shadow-xl", "shadow-black/40");
    else header.classList.remove("shadow-xl", "shadow-black/40");
  }
  setActiveLink();
});

// Typewriter effect (progressive enhancement)
document.addEventListener("DOMContentLoaded", () => {
  const el = $("#typewriter");
  if (!el) return;
  const text = el.textContent.trim();
  let i = 0;
  el.textContent = "";
  (function type() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(type, 65);
    }
  })();
});

// Back To Top button
const backToTop = $("#backToTop");
if (backToTop) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.classList.remove("opacity-0", "pointer-events-none");
      backToTop.classList.add("opacity-100");
    } else {
      backToTop.classList.add("opacity-0", "pointer-events-none");
      backToTop.classList.remove("opacity-100");
    }
  });
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Project slider arrows
const strip = $("#projects-strip");
const prevBtn = $("#proj-prev");
const nextBtn = $("#proj-next");
if (strip && prevBtn && nextBtn) {
  const scrollAmount = 340; // approximate card width
  prevBtn.addEventListener("click", () => strip.scrollBy({ left: -scrollAmount, behavior: "smooth" }));
  nextBtn.addEventListener("click", () => strip.scrollBy({ left: scrollAmount, behavior: "smooth" }));
}

// Theme toggle with persistence
const themeToggle = $("#theme-toggle");
const themeIcon = $("#theme-icon");
const THEME_KEY = "wildan-theme";
function applyStoredTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === "dark") document.documentElement.classList.add("theme-dark");
  if (stored === "light") document.documentElement.classList.remove("theme-dark");
  themeIcon && (themeIcon.style.transform = `rotate(${document.documentElement.classList.contains("theme-dark") ? 180 : 0}deg)`);
}
applyStoredTheme();
if (themeToggle && themeIcon) {
  themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("theme-dark");
    localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
    themeIcon.style.transform = `rotate(${isDark ? 180 : 0}deg)`;
    themeIcon.style.transition = "transform .5s";
  });
}

// Graceful handling if legacy contact form code exists (now removed)
const contactForm = $("#contact-form");
if (contactForm) {
  const formStatus = $("#form-status");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(contactForm);
    const payload = Object.fromEntries(data.entries());
    console.log("Contact submission", payload);
    if (formStatus) {
      formStatus.textContent = "Message sent (demo).";
      formStatus.className = "mt-4 text-center text-sm text-green-400";
      setTimeout(() => {
        formStatus.textContent = "";
      }, 4000);
    }
    contactForm.reset();
  });
}

