const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");
const button = document.getElementById("submitBtn");

const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

menuBtn.addEventListener("click", () => {
  mobileNav.style.display =
    mobileNav.style.display === "block" ? "none" : "block";
});


form.addEventListener("submit", async (e) => {
  e.preventDefault();

  button.disabled = true;
  button.textContent = "Sending...";
  status.textContent = "";

  // fake submit
  await new Promise((r) => setTimeout(r, 1000));

  status.textContent = "Message sent! We'll get back to you soon.";
  status.style.color = "green";

  form.reset();
  button.textContent = "Send Message";
  button.disabled = false;
});
