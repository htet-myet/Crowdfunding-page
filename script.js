"use strict";

const selectBtn = document.querySelectorAll(".select-btn");
const gotBtn = document.getElementById("got-btn");
const continueBtn = document.querySelectorAll(".btn-continue");
const closeModal = document.querySelector(".close-modal");

const overlay = document.querySelector(".overlay");
const thanks = document.querySelector(".thanks-letter");

const bookMark = document.getElementById("bookmark");

const backBtn = document.getElementById("btn-back");
const backFoot = document.querySelectorAll(".back-foot");
const backOverlay = document.querySelector(".back-overlay");
const backLabel = document.querySelectorAll(".back_project-head");
const pjBack = document.querySelectorAll("back-project");

const radios = document.querySelectorAll(".radio-input");
const billInput = document.querySelectorAll(".bill-input");

const menuBtn = document.querySelector(".menu");
const menuContents = document.querySelector(".menu-contents");
const closeBtn = document.querySelector(".close-btn");
const logo = document.querySelector(".logo");

menuBtn.addEventListener("click", () => {
  if (!menuContents.classList.contains("acitve")) {
    menuContents.classList.add("active");
    overlay.classList.add("active");
    menuBtn.classList.add("unactive");
    closeBtn.classList.add("active");
    logo.classList.add("zindex");
    closeBtn.classList.add("zindex");
  }
});

closeBtn.addEventListener("click", () => {
  menuContents.classList.remove("active");
  overlay.classList.remove("active");
  menuBtn.classList.remove("unactive");
  closeBtn.classList.remove("active");
  logo.classList.remove("zindex");  
  closeBtn.classList.remove("zindex");
});

backBtn.addEventListener("click", () => {
  if (!backOverlay.classList.contains("active")) {
    removeFun();
    overlay.classList.add("active");
    backOverlay.classList.add("active");
    radios.forEach((radio) => (radio.checked = false));
  }
});

backLabel.forEach((bl) =>
  bl.addEventListener("click", () => {
    if (
      !bl.parentNode.classList.contains("border_color") &&
      !bl.parentNode.classList.contains("visible")
    ) {
      bl.parentNode.classList.add("border_color");
      bl.parentNode.classList.add("visible");
    }
  })
);

billInput.forEach((bill) =>
  bill.addEventListener("click", () => {
    bill.classList.add("border_color");
  })
);

continueBtn.forEach((btnC) =>
  btnC.addEventListener("click", () => {
    if (!thanks.classList.contains("active")) {
      thanks.classList.add("active");
      backOverlay.classList.remove("active");
    }
  })
);

closeModal.addEventListener("click", () => {
  if (backOverlay.classList.contains("active")) {
    overlay.classList.remove("active");
    backOverlay.classList.remove("active");
  }
});

bookMark.addEventListener("click", () => {
  if ((bookMark.innerHTML = "Bookmark")) {
    bookMark.style.color = "hsl(176, 50%, 47%)";
    bookMark.innerHTML = "Bookmarked";
  }
});

selectBtn.forEach((btn) =>
  btn.addEventListener("click", () => {
    if (!thanks.classList.contains("active")) {
      thanks.classList.add("active");
      overlay.classList.add("active");
    }
  })
);

gotBtn.addEventListener("click", () => {
  if (thanks.classList.contains("active")) {
    thanks.classList.remove("active");
    overlay.classList.remove("active");
  }
});

function removeFun() {
  backLabel.forEach((bl) => bl.parentNode.classList.remove("border_color"));
  backLabel.forEach((bl) => bl.parentNode.classList.remove("visible"));
  billInput.forEach((bill) => (bill.value = ""));
  billInput.forEach((bill) => bill.classList.remove("border_color"));
}
