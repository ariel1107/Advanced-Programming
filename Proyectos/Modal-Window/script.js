"use strict";

const btnsShowModal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
console.log(btnsShowModal);

for (let i = 0; i < btnsShowModal.length; i++)
  btnsShowModal[i].addEventListener("click", openModal);

// btnCloseModal.addEventListener("click", function () {
// modal.classList.add("hidden");
// overlay.classList.add("hidden");
// });
//
// overlay.addEventListener("click", function () {
// modal.classList.add("hidden");
// overlay.classList.add("hidden");
// });

//Para no duplicar el codigo se crea una funcion que haga exactamente eso y luego se llama en el evento
// SIN EL PARENTESIS :
function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
