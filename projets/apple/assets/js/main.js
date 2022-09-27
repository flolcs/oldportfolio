// NAV
const toggleMenu = document.querySelector(".ri-menu-line");
const toggleCloseMenu = document.querySelector(".ri-close-line");
const sousMenu = document.querySelector(".sous_menu");
const nav = document.querySelector("nav");

toggleMenu.addEventListener("click", () => {
  sousMenu.style.display = "flex";
  toggleMenu.style.display = "none";
  toggleCloseMenu.style.display = "block";
  nav.style.transition = "0.5s";
  nav.style.backgroundColor = "#000000";
});

toggleCloseMenu.addEventListener("click", () => {
  sousMenu.style.display = "none";
  toggleMenu.style.display = "block";
  toggleCloseMenu.style.display = "none";
  nav.style.backgroundColor = "#333333";
});

// ScrollReveal
const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 1000,
  delay: 200,
  //reset: true
});

sr.reveal(".iphone13pro", { origin: "top" });
sr.reveal(".iphonese", { origin: "bottom" });
sr.reveal("h3", { origin: "bottom" });
sr.reveal(".wwdc", { origin: "left" });
sr.reveal(".studio_display", { origin: "left" });
sr.reveal(".apple_fitness", { origin: "left" });
sr.reveal(".apple_watch", { origin: "bottom" });
sr.reveal(".mac_studio", { origin: "bottom" });
sr.reveal(".ipadair", { origin: "top" });
sr.reveal(".apple_tv", { origin: "bottom" });
