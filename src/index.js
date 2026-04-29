// console.log("App running...");

import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function clearContent() {
  document.getElementById("content").innerHTML = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const homeBtn = document.getElementById("homeBtn");
  const menuBtn = document.getElementById("menuBtn");
  const contactBtn = document.getElementById("contactBtn");

  loadHome();

  homeBtn.addEventListener("click", () => {
    clearContent();
    loadHome();
  });

  menuBtn.addEventListener("click", () => {
    clearContent();
    loadMenu();
  });

  contactBtn.addEventListener("click", () => {
    clearContent();
    loadContact();
  });
});