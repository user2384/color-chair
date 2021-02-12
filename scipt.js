const overlay = document.getElementById("product-shape");
var color1 = document.querySelector(".color1");

function changeColor1() {
  // set the hex color
  overlay.style.fill = color1.value;
}

color1.addEventListener("input", changeColor1);
