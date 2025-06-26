// Mobile menu functionality
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const mobileNav = document.querySelector(".mobile-nav")
  const mobileNavLinks = document.querySelectorAll(".mobile-nav a")

  // Toggle mobile menu
  mobileMenuBtn.addEventListener("click", function () {
    this.classList.toggle("active")
    mobileNav.classList.toggle("active")
    document.body.classList.toggle("menu-open")
  })

  // Close mobile menu when clicking on a link
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenuBtn.classList.remove("active")
      mobileNav.classList.remove("active")
      document.body.classList.remove("menu-open")
    })
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!mobileMenuBtn.contains(e.target) && !mobileNav.contains(e.target)) {
      mobileMenuBtn.classList.remove("active")
      mobileNav.classList.remove("active")
      document.body.classList.remove("menu-open")
    }
  })

  // Scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated")
      }
    })
  }, observerOptions)

  // Observe all sections
  const sections = document.querySelectorAll("section")
  sections.forEach((section) => {
    section.classList.add("animate-on-scroll")
    observer.observe(section)
  })

  // Animate cards with delay
  const cards = document.querySelectorAll(".service-card, .car-card, .advantage, .contact-item")
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`
    card.classList.add("loading")
  })

  // Header scroll effect
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header")
    if (window.scrollY > 100) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  })

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        const headerHeight = document.querySelector("header").offsetHeight
        const targetPosition = target.offsetTop - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  // WhatsApp button click tracking
  const whatsappBtn = document.querySelector(".whatsapp-float a")
  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", () => {
      // You can add analytics tracking here
      console.log("WhatsApp button clicked")
    })
  }

  // CTA button click tracking
  const ctaBtn = document.querySelector(".cta-button")
  if (ctaBtn) {
    ctaBtn.addEventListener("click", () => {
      // You can add contact form or phone call functionality here
      console.log("CTA button clicked")
      // Example: window.location.href = 'tel:+994XXXXXXXXX';
    })
  }

  // Prevent body scroll when mobile menu is open
  const style = document.createElement("style")
  style.textContent = `
        body.menu-open {
            overflow: hidden;
        }
    `
  document.head.appendChild(style)
})

// Performance optimization for mobile
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    // You can add service worker registration here for offline functionality
  })
}

// Touch event optimization
let touchStartY = 0
document.addEventListener(
  "touchstart",
  (e) => {
    touchStartY = e.touches[0].clientY
  },
  { passive: true },
)

document.addEventListener(
  "touchmove",
  (e) => {
    const touchY = e.touches[0].clientY
    const touchDiff = touchStartY - touchY

    // Add custom touch scroll behavior if needed
  },
  { passive: true },
)
