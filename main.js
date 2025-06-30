// --- Mobile Menu Toggle ---
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// --- Close mobile menu when a link is clicked ---
const navLinks = document.querySelectorAll("#mobile-menu a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// --- Header shadow on scroll ---
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("shadow-lg", "shadow-gray-900/50");
  } else {
    header.classList.remove("shadow-lg", "shadow-gray-900/50");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const text = "A Passionate Junior Developer";
  const el = document.getElementById("typewriter");
  let i = 0;
  function type() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(type, 80);
    }
  }
  type();
});

const backToTop = document.getElementById("backToTop");
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

// --- Contact Form Submission ---
// Note: This is a basic client-side form handler. For a real application,
// you would send this data to a backend server or a service like Formspree.
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  // Get form data
  const formData = new FormData(this);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  console.log("Form Submitted:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // Display a success message
  formStatus.textContent = "Thank you! Your message has been sent.";
  formStatus.className = "mt-4 text-center text-sm text-green-400";

  // Reset the form after a few seconds
  setTimeout(() => {
    contactForm.reset();
    formStatus.textContent = "";
  }, 5000);

  // Here you would typically use fetch() to send the data to a server
  /*
            fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message })
            })
            .then(response => response.json())
            .then(data => {
                formStatus.textContent = 'Message sent successfully!';
                formStatus.className = 'mt-4 text-center text-sm text-green-400';
                contactForm.reset();
            })
            .catch((error) => {
                formStatus.textContent = 'An error occurred. Please try again.';
                formStatus.className = 'mt-4 text-center text-sm text-red-400';
            });
            */
});
