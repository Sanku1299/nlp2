const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

menuBtn.addEventListener("click", () => {
  mobileNav.style.display =
    mobileNav.style.display === "block" ? "none" : "block";
});

document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;

    // close others (single accordion behavior)
    document.querySelectorAll(".faq-item").forEach((el) => {
      if (el !== item) el.classList.remove("active");
    });

    item.classList.toggle("active");
  });
});
