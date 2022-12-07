const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email;
  const password = event.currentTarget.elements.password;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  console.log({ email: email.value, password: password.value });
  event.currentTarget.reset();
}
