// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Header scroll effect
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.95)";
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  } else {
    header.style.background = "white";
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  }
});

// Animation on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll(
    ".feature-card, .spec-item, .pricing-card, .review-card, .contact-item"
  );

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;

    if (elementTop < window.innerHeight && elementBottom > 0) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
};

// Initial animation setup
document
  .querySelectorAll(
    ".feature-card, .spec-item, .pricing-card, .review-card, .contact-item"
  )
  .forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "all 0.6s ease-out";
  });

// Contact form handling
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert("Thank you for your message! We will get back to you soon.");
    contactForm.reset();
  });
}

// Newsletter form handling
const newsletterForm = document.querySelector(".newsletter-form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Add newsletter subscription logic here
    alert("Thank you for subscribing to our newsletter!");
    newsletterForm.reset();
  });
}

// Pricing toggle animation
const pricingCards = document.querySelectorAll(".pricing-card");
pricingCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    pricingCards.forEach((c) => c.classList.remove("active"));
    card.classList.add("active");
  });
});

// Statistics counter animation
const stats = document.querySelectorAll(".stat-number");
const animateStats = () => {
  stats.forEach((stat) => {
    const target = parseInt(stat.textContent);
    let current = 0;
    const increment = target / 50;
    const updateCount = () => {
      if (current < target) {
        current += increment;
        stat.textContent = Math.ceil(current).toLocaleString();
        requestAnimationFrame(updateCount);
      } else {
        stat.textContent = target.toLocaleString();
      }
    };
    updateCount();
  });
};

// Trigger animations when elements come into view
window.addEventListener("scroll", () => {
  animateOnScroll();
});

// Initial check for elements in view
document.addEventListener("DOMContentLoaded", () => {
  animateOnScroll();
  animateStats();
});
