const validationInput = document.querySelector("#validation-input");
const dataLength = validationInput.getAttribute("data-length");

validationInput.addEventListener("blur", () => {
  if (validationInput.value.length === Number(dataLength)) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});
