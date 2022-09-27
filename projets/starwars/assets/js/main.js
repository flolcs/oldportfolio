// Pagination

const flecheGauche = document.querySelector(".ri-arrow-left-line");
const flecheDroite = document.querySelector(".ri-arrow-right-line");
const circle2 = document.querySelector(".rond2");
const circle3 = document.querySelector(".rond3");
const progress1 = document.querySelector(".progress1");
const progress2 = document.querySelector(".progress2");

flecheDroite.addEventListener("click", () => {
  flecheGauche.classList.add("fleche_active");
  if (progress1.className === "dynamic_progress progress1") {
    progress1.classList.add("progressActive");
    circle2.classList.add("active");
  } else if (progress2.className === "dynamic_progress progress2") {
    progress2.classList.add("progressActive");
    circle3.classList.add("active");
  }
});

flecheGauche.addEventListener("click", () => {
  if (progress2.className === "dynamic_progress progress2 progressActive") {
    progress2.classList.remove("progressActive");
    circle3.classList.remove("active");
  } else if (
    progress1.className === "dynamic_progress progress1 progressActive"
  ) {
    progress1.classList.remove("progressActive");
    circle2.classList.remove("active");
    flecheGauche.classList.remove("fleche_active");
  }
});

// Image
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");

flecheDroite.addEventListener("click", () => {
  if (img1.className === "img imgActive") {
    img1.classList.remove("imgActive");
    img2.classList.add("imgActive");
  } else if (img2.className === "img imgActive") {
    img2.classList.remove("imgActive");
    img3.classList.add("imgActive");
  }
});

flecheGauche.addEventListener("click", () => {
  if (img3.className === "img imgActive") {
    img3.classList.remove("imgActive");
    img2.classList.add("imgActive");
  } else if (img2.className === "img imgActive") {
    img2.classList.remove("imgActive");
    img1.classList.add("imgActive");
  }
});

//Text
const text1 = document.querySelector("#text1");
const text2 = document.querySelector("#text2");
const text3 = document.querySelector("#text3");

flecheDroite.addEventListener("click", () => {
  if (text1.className === "main_text textActive") {
    text1.classList.remove("textActive");
    text2.classList.add("textActive");
  } else if (text2.className === "main_text textActive") {
    text2.classList.remove("textActive");
    text3.classList.add("textActive");
  }
});

flecheGauche.addEventListener("click", () => {
  if (text3.className === "main_text textActive") {
    text3.classList.remove("textActive");
    text2.classList.add("textActive");
  } else if (text2.className === "main_text textActive") {
    text2.classList.remove("textActive");
    text1.classList.add("textActive");
  }
});

//Date
const chiffre3 = document.querySelector("#chiffre_3");
const chiffre4 = document.querySelector("#chiffre_4");
const chiffre5 = document.querySelector("#chiffre_5");
const chiffre6 = document.querySelector("#chiffre_6");
const chiffre7 = document.querySelector("#chiffre_7");

flecheDroite.addEventListener("click", () => {
  if (
    chiffre3.className === "text_date dateActive" &&
    chiffre4.className === "text_date dateActive"
  ) {
    chiffre3.classList.remove("dateActive");
    chiffre4.classList.remove("dateActive");
    chiffre5.classList.add("dateActive");
    chiffre6.classList.add("dateActive");
  } else if (
    chiffre5.className === "text_date dateActive" &&
    chiffre6.className === "text_date dateActive"
  ) {
    chiffre6.classList.remove("dateActive");
    chiffre7.classList.add("dateActive");
  }
});

flecheGauche.addEventListener("click", () => {
  if (
    chiffre5.className === "text_date dateActive" &&
    chiffre7.className === "text_date dateActive"
  ) {
    chiffre7.classList.remove("dateActive");
    chiffre6.classList.add("dateActive");
  } else if (
    chiffre5.className === "text_date dateActive" &&
    chiffre6.className === "text_date dateActive"
  ) {
    chiffre5.classList.remove("dateActive");
    chiffre6.classList.remove("dateActive");
    chiffre3.classList.add("dateActive");
    chiffre4.classList.add("dateActive");
  }
});
