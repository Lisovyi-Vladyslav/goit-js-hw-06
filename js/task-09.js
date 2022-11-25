const changeColorBtn = document.querySelector(".change-color");
const namecolor = document.querySelector(".color");
const body = document.querySelector("body");

namecolor.textContent = getRandomHexColor();

body.style.background = namecolor.textContent;


function getRandomHexColor() {
  const newColor = "#" + Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0);
  console.log(newColor);
  namecolor.textContent = newColor;
  body.style.background = newColor;
return newColor
}


changeColorBtn.addEventListener("click", ()=>getRandomHexColor());

