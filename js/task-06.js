const numberInput = document.querySelector("#validation-input");

function checkLength(event) {
   const lengthInput = event.currentTarget.value.split("").length;
    if (lengthInput == numberInput.getAttribute("data-length")) {
       
        numberInput.classList.remove("invalid");
        numberInput.classList.add("valid");
    } else {
         numberInput.classList.remove("valid");
        numberInput.classList.add("invalid");
    }

};

numberInput.addEventListener("blur", checkLength);
