const signPopup = document.getElementById("signup-popup");
const overlay = document.getElementById("overlay");
const openSignup = document.getElementById("signup-btn");
const closeSignup = document.getElementById("signup-close");

function openSignupPopup() {
  signPopup.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
function closeSignupPopup() {
  signPopup.classList.add("hidden");
  overlay.classList.add("hidden");
}

openSignup.addEventListener("click", openSignupPopup);
closeSignup.addEventListener("click", closeSignupPopup);
overlay.addEventListener("click", closeSignupPopup);

const signupForm = document.getElementById("signup-form");
const fullName = document.getElementById("fullname");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confrimPassword = document.getElementById("confrimPassword");
const cancelSignup = document.getElementById("signupCancel");
const signupInput = signPopup.querySelector(".field-control");
console.log(signupInput);

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();
  checkInputs();
});
cancelSignup.addEventListener("click", function () {
  signupInput.classList.remove("error");
  signupInput.classList.remove("success");
});

function checkInputs() {
  const fullNameValue = fullName.value.trim();
  const userNameValue = userName.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const passwordValue = password.value.trim();
  const confrimPasswordValue = confrimPassword.value.trim();

  if (fullNameValue === "") {
    setErrorFor(fullName, "Full Name can't be blank");
  } else {
    setSuccessFor(fullName);
  }

  if (userNameValue === "") {
    setErrorFor(userName, "User Name can't be blank");
  } else {
    setSuccessFor(userName);
  }
  if (emailValue === "") {
    setErrorFor(email, "Email can't be blank");
  } else {
    setSuccessFor(email);
  }
  if (phoneValue === "") {
    setErrorFor(phone, "Phone can't be blank");
  } else {
    setSuccessFor(phone);
  }
  if (passwordValue === "") {
    setErrorFor(password, "Password can't be blank");
  } else {
    setSuccessFor(password);
  }
  if (confrimPasswordValue === "") {
    setErrorFor(confrimPassword, "Password Confrim can't be blank");
  } else {
    setSuccessFor(confrimPassword);
  }
}

function setErrorFor(input, message) {
  const inputHolder = input.parentElement;
  const errorMessage = inputHolder.querySelector(".er-msg");
  inputHolder.classList.add("error");
  inputHolder.classList.remove("success");
  errorMessage.innerText = message;
}

function setSuccessFor(input) {
  const inputHolder = input.parentElement;
  inputHolder.classList.add("success");
  inputHolder.classList.remove("error");
}
