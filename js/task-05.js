const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");



function changeName(event) {
  output.textContent =
    event.currentTarget.value || (output.textContent = "Anonymous");
};

textInput.addEventListener("input", changeName);
