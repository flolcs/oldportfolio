// Scroll Reveal
const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2000,
  delay: 400,
  //reset: true
});

sr.reveal("img", { origin: "top" });
sr.reveal(".mainLeft", { origin: "bottom" });
sr.reveal(".ghost-shadow");

// Menu
const sousMenu = document.querySelector(".sous-menu");
const btnMenu = document.querySelector(".ri-menu-line");
const btnCloseMenu = document.querySelector(".ri-close-line");

btnMenu.addEventListener("click", () => {
  sousMenu.style.display = "flex";
  btnMenu.style.display = "none";
  btnCloseMenu.style.display = "flex";
});
btnCloseMenu.addEventListener("click", () => {
  sousMenu.style.display = "none";
  btnMenu.style.display = "flex";
  btnCloseMenu.style.display = "none";
});
