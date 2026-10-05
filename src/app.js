// Spectacular interactions: mobile menu, reveal on scroll, founding slots counter.
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => mobileMenu.classList.toggle("open"));
  mobileMenu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => mobileMenu.classList.remove("open"))
  );
}

const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
  { threshold: 0.12 }
);
document.querySelectorAll("section, .offer-item, .ad-card, .price-card, .step").forEach((el) => {
  el.classList.add("reveal");
  io.observe(el);
});

// Founding slots: update in one place when sales happen.
const FOUNDING_TOTAL = 10;
const FOUNDING_TAKEN = 3;
const slotsEl = document.getElementById("slotsLeft");
if (slotsEl) slotsEl.textContent = `${FOUNDING_TOTAL - FOUNDING_TAKEN} of ${FOUNDING_TOTAL}`;
