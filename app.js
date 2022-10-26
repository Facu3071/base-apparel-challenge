const form = document.querySelector(".form");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputValue = email.value;
  if (!validateEmail(inputValue)) {
    form.classList.add("error");
  } else {
    form.classList.remove("error");
    alert("Email send succesfully");
    email.value = " ";
  }
});

function validateEmail(email) {
  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
