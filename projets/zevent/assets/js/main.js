// ScrollReveal
const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 1000,
  delay: 200,
  //reset: true
});

sr.reveal("#p1", { delay: 0, origin: "left" });
sr.reveal("#p2", { delay: 300, origin: "left" });
sr.reveal("#p3", { delay: 600, origin: "left" });
sr.reveal(".h2016", { origin: "left" });
sr.reveal(".h2017", { origin: "top" });
sr.reveal(".h2018", { origin: "left" });
sr.reveal(".h2019", { origin: "top" });
sr.reveal(".h2020", { origin: "left" });
sr.reveal(".h2021", { origin: "top" });
sr.reveal(".h2022", { origin: "bottom" });
sr.reveal(".filtre-fdf", { origin: "top" });
sr.reveal(".filtre-seasheperd", { origin: "top" });
sr.reveal(".filtre-lpo", { origin: "top" });
sr.reveal(".filtre-wwf", { origin: "bottom" });
sr.reveal(".filtre-tftp", { origin: "bottom" });
sr.reveal(".filtre-theseacleaners", { origin: "bottom" });

// VANTA
VANTA.TOPOLOGY({
  el: ".top-header",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  color: "#57af37",
  backgroundColor: "#202020",
  minHeight: 70.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  waveHeight: 10,
  shininess: 0,
  waveSpeed: 5,
  zoom: 1,
});

// Swiper JS
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3.2,
  spaceBetween: 20,
  loop: true,
  loopFillGroupWithBlank: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    425: {
      slidesPerView: 4.2,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 5.2,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 6.2,
      spaceBetween: 50,
    },
    900: {
      slidesPerView: 7.2,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 8.2,
      spaceBetween: 50,
    },
    1200: {
      slidesPerView: 9.2,
      spaceBetween: 50,
    },
    1440: {
      slidesPerView: 10.2,
      spaceBetween: 50,
    },
  },
});

// JS Streamers
const swiperOpen = document.getElementById("swiperOpen");
const swiperClose = document.getElementById("swiperClose");
const swiperJs = document.querySelector(".swiperjs");

swiperOpen.addEventListener("click", () => {
  swiperJs.style.display = "flex";
  swiperOpen.style.display = "none";
  swiperClose.style.display = "flex";
});

swiperClose.addEventListener("click", () => {
  swiperJs.style.display = "none";
  swiperOpen.style.display = "flex";
  swiperClose.style.display = "none";
});

// JS Associations
const filtreFdf = document.querySelector(".filtre-fdf");
const filtreSeasheperd = document.querySelector(".filtre-seasheperd");
const filtreLpo = document.querySelector(".filtre-lpo");
const filtreWwf = document.querySelector(".filtre-wwf");
const filtreTftp = document.querySelector(".filtre-tftp");
const filtreTheseacleaners = document.querySelector(".filtre-theseacleaners");
const fdf = document.querySelector(".fdf");
const seasheperd = document.querySelector(".seasheperd");
const lpo = document.querySelector(".lpo");
const wwf = document.querySelector(".wwf");
const tftp = document.querySelector(".tftp");
const theseacleaners = document.querySelector(".theseacleaners");

filtreFdf.addEventListener("click", () => {
  filtreFdf.classList.add("active-filtre");
  fdf.classList.add("active-asso");
  filtreSeasheperd.classList.remove("active-filtre");
  filtreLpo.classList.remove("active-filtre");
  filtreWwf.classList.remove("active-filtre");
  filtreTftp.classList.remove("active-filtre");
  filtreTheseacleaners.classList.remove("active-filtre");
  seasheperd.classList.remove("active-asso");
  lpo.classList.remove("active-asso");
  wwf.classList.remove("active-asso");
  tftp.classList.remove("active-asso");
  theseacleaners.classList.remove("active-asso");
});

filtreSeasheperd.addEventListener("click", () => {
  filtreSeasheperd.classList.add("active-filtre");
  seasheperd.classList.add("active-asso");
  filtreFdf.classList.remove("active-filtre");
  filtreLpo.classList.remove("active-filtre");
  filtreWwf.classList.remove("active-filtre");
  filtreTftp.classList.remove("active-filtre");
  filtreTheseacleaners.classList.remove("active-filtre");
  fdf.classList.remove("active-asso");
  lpo.classList.remove("active-asso");
  wwf.classList.remove("active-asso");
  tftp.classList.remove("active-asso");
  theseacleaners.classList.remove("active-asso");
});

filtreLpo.addEventListener("click", () => {
  filtreLpo.classList.add("active-filtre");
  lpo.classList.add("active-asso");
  filtreFdf.classList.remove("active-filtre");
  filtreSeasheperd.classList.remove("active-filtre");
  filtreWwf.classList.remove("active-filtre");
  filtreTftp.classList.remove("active-filtre");
  filtreTheseacleaners.classList.remove("active-filtre");
  fdf.classList.remove("active-asso");
  seasheperd.classList.remove("active-asso");
  wwf.classList.remove("active-asso");
  tftp.classList.remove("active-asso");
  theseacleaners.classList.remove("active-asso");
});

filtreWwf.addEventListener("click", () => {
  filtreWwf.classList.add("active-filtre");
  wwf.classList.add("active-asso");
  filtreFdf.classList.remove("active-filtre");
  filtreSeasheperd.classList.remove("active-filtre");
  filtreLpo.classList.remove("active-filtre");
  filtreTftp.classList.remove("active-filtre");
  filtreTheseacleaners.classList.remove("active-filtre");
  fdf.classList.remove("active-asso");
  seasheperd.classList.remove("active-asso");
  lpo.classList.remove("active-asso");
  tftp.classList.remove("active-asso");
  theseacleaners.classList.remove("active-asso");
});

filtreTftp.addEventListener("click", () => {
  filtreTftp.classList.add("active-filtre");
  tftp.classList.add("active-asso");
  filtreFdf.classList.remove("active-filtre");
  filtreSeasheperd.classList.remove("active-filtre");
  filtreLpo.classList.remove("active-filtre");
  filtreWwf.classList.remove("active-filtre");
  filtreTheseacleaners.classList.remove("active-filtre");
  fdf.classList.remove("active-asso");
  seasheperd.classList.remove("active-asso");
  lpo.classList.remove("active-asso");
  wwf.classList.remove("active-asso");
  theseacleaners.classList.remove("active-asso");
});

filtreTheseacleaners.addEventListener("click", () => {
  filtreTheseacleaners.classList.add("active-filtre");
  theseacleaners.classList.add("active-asso");
  filtreFdf.classList.remove("active-filtre");
  filtreSeasheperd.classList.remove("active-filtre");
  filtreLpo.classList.remove("active-filtre");
  filtreWwf.classList.remove("active-filtre");
  filtreTftp.classList.remove("active-filtre");
  fdf.classList.remove("active-asso");
  seasheperd.classList.remove("active-asso");
  lpo.classList.remove("active-asso");
  wwf.classList.remove("active-asso");
  tftp.classList.remove("active-asso");
});
