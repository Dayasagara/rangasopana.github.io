// ── Curtain reveal ──
const curtainStage = document.getElementById("curtainStage");
document.body.classList.add("curtains-closed");

window.addEventListener("load", () => {
  setTimeout(() => {
    curtainStage.classList.add("open");
    document.body.classList.remove("curtains-closed");
    // remove from the tree once the valance has lifted
    setTimeout(() => curtainStage.remove(), 3600);
  }, 700);
});

// ── Gallery scroller arrows ──
const scroller = document.getElementById("galleryScroller");
const scrollStep = () => {
  const item = scroller.querySelector(".g-item");
  return item ? item.offsetWidth + 22 : 320;
};
document.getElementById("galleryPrev").addEventListener("click", () =>
  scroller.scrollBy({ left: -scrollStep(), behavior: "smooth" })
);
document.getElementById("galleryNext").addEventListener("click", () =>
  scroller.scrollBy({ left: scrollStep(), behavior: "smooth" })
);

// ── Scroll reveal ──
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
