// Light and Dark Mode
const btnLightMode = document.querySelector(".btn-lightMode");
const btnDarkMode = document.querySelector(".btn-darkMode");

btnLightMode.addEventListener("click", () => {
  btnLightMode.classList.remove("active");
  btnLightMode.classList.add("active");
  btnDarkMode.classList.remove("active");
  document.body.classList.toggle("root");
  document.body.classList.remove("dark-theme");
  document.body.classList.add("light-theme");
});
btnDarkMode.addEventListener("click", () => {
  btnDarkMode.classList.remove("active");
  btnDarkMode.classList.add("active");
  btnLightMode.classList.remove("active");
  document.body.classList.remove("light-theme");
  document.body.classList.add("dark-theme");
});

//Charts.JS
//GRAPH 1
const graphSales = document.getElementById("graph-sales").getContext("2d");
const myChart1 = new Chart(graphSales, {
  type: "doughnut",
  data: {
    labels: ["", ""],
    datasets: [
      {
        label: "",
        data: [81, 19],
        backgroundColor: ["#7380ec", "#7d8da1"],
        borderColor: ["#7380ec", "#7d8da1"],
      },
    ],
  },
  options: {
    plugins: { legend: { display: false } },
  },
});

//GRAPH 2
const graphExpenses = document
  .getElementById("graph-expenses")
  .getContext("2d");
const myChart2 = new Chart(graphExpenses, {
  type: "doughnut",
  data: {
    labels: ["", ""],
    datasets: [
      {
        label: "",
        data: [62, 38],
        backgroundColor: ["#7380ec", "#7d8da1"],
        borderColor: ["#7380ec", "#7d8da1"],
      },
    ],
  },
  options: {
    plugins: { legend: { display: false } },
  },
});

//GRAPH 3
const graphIncome = document.getElementById("graph-income").getContext("2d");
const myChart3 = new Chart(graphIncome, {
  type: "doughnut",
  data: {
    labels: ["", ""],
    datasets: [
      {
        label: "",
        data: [44, 56],
        backgroundColor: ["#7380ec", "#7d8da1"],
        borderColor: ["#7380ec", "#7d8da1"],
      },
    ],
  },
  options: {
    plugins: { legend: { display: false } },
  },
});

// NAV ET MENU
// Menu
const toggleMenu = document.querySelector("#icon-menu");
const toggleCloseMenu = document.querySelector("#icon-close");
const sousMenu = document.querySelector("nav");

if (document.documentElement.clientWidth < 768) {
  sousMenu.style.display = "none";
  toggleCloseMenu.style.display = "none";
  toggleMenu.style.display = "block";
} else {
  sousMenu.style.display = "block";
  toggleCloseMenu.style.display = "none";
  toggleMenu.style.display = "none";
}

toggleMenu.addEventListener("click", () => {
  sousMenu.style.display = "block";
  sousMenu.style.left = "0";
  toggleMenu.style.display = "none";
  toggleCloseMenu.style.display = "block";
});

toggleCloseMenu.addEventListener("click", () => {
  sousMenu.style.display = "none";
  toggleMenu.style.display = "block";
  toggleCloseMenu.style.display = "none";
});

// ScrollReveal
const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2000,
  delay: 400,
  //reset: true
});

sr.reveal(".dashboard", { origin: "top" });
sr.reveal(".updates", { origin: "top" });
sr.reveal(".orders", { origin: "bottom" });
sr.reveal(".analytics", { origin: "bottom" });
