const boton = document.getElementById("toggle");
const menu = document.getElementById("menu");
let visible = false;

boton.addEventListener("click", () => {
  if (!visible) {
    // Expandir
    menu.style.height = menu.scrollHeight + "px";
    visible = true;
  } else {
    // Colapsar
    menu.style.height = "0";
    visible = false;
  }
});
