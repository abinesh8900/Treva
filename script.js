// ******signup popup*******//
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

// *******signup validation******//
const signupForm = document.getElementById("signup-form");
const fullName = document.getElementById("fullname");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confrimPassword = document.getElementById("confrimPassword");
const temrsAndConditions = document.getElementById("terms-conditions");
const cancelSignup = document.getElementById("signupCancel");
const signupInput = signPopup.querySelectorAll(".field-control");

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();
  checkInputs();
});

for (const items of signupInput) {
  cancelSignup.addEventListener("click", function () {
    items.classList.remove("error");
    items.classList.remove("success");
  });
}

function checkInputs() {
  const emailFormat =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneNo = /^\d{10}$/;

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
    // console.log("is blank");
  } else if (emailValue.match(emailFormat)) {
    setSuccessFor(email);
    // console.log("is a valid");
  } else {
    console.log("not valid");
    setErrorFor(email, "Email is not valid ");
  }

  if (phoneValue === "") {
    setErrorFor(phone, "Phone can't be blank");
    // console.log("is blank");
  } else if (phoneValue.match(phoneNo)) {
    setSuccessFor(phone);
    // console.log("is a valid");
  } else {
    setErrorFor(phone, "Phone number is not valid");
    // console.log("not valid");
  }
  if (passwordValue === "") {
    setErrorFor(password, "Password can't be blank");
  } else {
    setSuccessFor(password);
  }
  if (confrimPasswordValue === "") {
    // console.log("is blank");
    setErrorFor(confrimPassword, "Password Confrim can't be blank");
  } else if (passwordValue === confrimPasswordValue) {
    setSuccessFor(confrimPassword);
    // console.log("match");
  } else {
    setErrorFor(confrimPassword, "Password not match");
    // console.log(" not match");
  }
  if (temrsAndConditions.checked) {
    setSuccessFor(temrsAndConditions);
  } else {
    setErrorFor(temrsAndConditions, "Select the check box");
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
