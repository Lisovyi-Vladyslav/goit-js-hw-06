const inputEl = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");
spanText.style.fontSize = `${inputEl.value}px`;
inputEl.addEventListener("input", onInputCange);
function onInputCange() {
     const fontSize = Number(inputEl.value);
    spanText.style.fontSize = `${fontSize}px`;
};

