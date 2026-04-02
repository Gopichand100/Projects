// Mobile nav
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

// Contact form message (front-end only)
const form2 = document.getElementById("contactForm2");
const status2 = document.getElementById("status2");

if (form2 && status2) {
  form2.addEventListener("submit", (e) => {
    e.preventDefault();
    status2.textContent = "Thanks! Your message has been saved in this browser.";
    form2.reset();
    setTimeout(() => (status2.textContent = ""), 4000);
  });
}

// Project modal details
const modal = document.getElementById("projectModal");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalClose = document.getElementById("modalClose");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");

const projectDetails = {
  "web-tech": {
    title: "Web Technology – Web Pages Designer",
    body:
      "Built a small multi-page website using HTML, CSS, JavaScript and Bootstrap. " +
      "Focused on clean layouts, responsive design, and simple interactions suitable " +
      "for small businesses and portfolios."
  },
  "service-tax": {
    title: "Service Taxes – Excel Management",
    body:
      "Managed one year of service tax data using Excel. Designed tables, applied " +
      "filters and formulas, and created quick summaries to understand totals."
  },
  "tax-accounts": {
    title: "Tax Accounts – Record Management",
    body:
      "Organized two years of tax account information, categorized records, and " +
      "maintained basic reporting sheets for easy reference."
  }
};

document.querySelectorAll(".tag-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.project;
    const details = projectDetails[key];
    if (!details) return;
    modalTitle.textContent = details.title;
    modalBody.textContent = details.body;
    modal.classList.add("active");
  });
});

[modalBackdrop, modalClose].forEach((el) => {
  if (!el) return;
  el.addEventListener("click", () => modal.classList.remove("active"));
});

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}