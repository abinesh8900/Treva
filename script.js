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
  clearAll();
}

openSignup.addEventListener("click", openSignupPopup);
closeSignup.addEventListener("click", closeSignupPopup);
// overlay.addEventListener("click", closeSignupPopup);

// *******signup validation******//
const signupForm = document.getElementById("signup-form");
const cancelSignup = document.getElementById("signupCancel");
const signUp = document.getElementById("signUp");
const signupInput = signPopup.querySelectorAll(".field-control");
// console.log(signupInput);

function clearAll() {
  for (const items of signupInput) {
    items.classList.remove("error");
    items.classList.remove("success");
  }
}

cancelSignup.addEventListener("click", clearAll);

signUp.disabled = true;

const checkFullName = function () {
  const fullName = document.getElementById("fullname");
  const fullNameValue = fullName.value.trim();

  if (fullNameValue === "") {
    setErrorFor(fullName, "Full Name can't be blank");
    makeDisabel();
    return 1;
  } else {
    setSuccessFor(fullName);
    return 0;
  }
};

const checkUserName = function () {
  const userName = document.getElementById("username");
  const userNameValue = userName.value.trim();
  if (userNameValue === "") {
    setErrorFor(userName, "User Name can't be blank");
    makeDisabel();
    return 1;
  } else {
    setSuccessFor(userName);
    return 0;
  }
};

const checkEmail = function () {
  const email = document.getElementById("email");
  const emailValue = email.value.trim();
  const emailFormat =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailValue === "") {
    setErrorFor(email, "Email can't be blank");
    makeDisabel();
    return 1;
  } else if (emailValue.match(emailFormat)) {
    setSuccessFor(email);
    return 0;
  } else {
    console.log("not valid");
    setErrorFor(email, "Email is not valid ");
    makeDisabel();
    return 1;
  }
};

const checkPhone = function () {
  const phone = document.getElementById("phone");
  const phoneValue = phone.value.trim();
  const phoneNo = /^\d{10}$/;
  if (phoneValue === "") {
    setErrorFor(phone, "Phone can't be blank");
    makeDisabel();
    return 1;
  } else if (phoneValue.match(phoneNo)) {
    setSuccessFor(phone);
    return 0;
  } else {
    setErrorFor(phone, "Phone number is not valid");
    makeDisabel();
    return 1;
  }
};

const checkPassword = function () {
  const password = document.getElementById("password");
  const passwordValue = password.value.trim();
  if (passwordValue === "") {
    setErrorFor(password, "Password can't be blank");
    makeDisabel();
  } else {
    setSuccessFor(password);
    return passwordValue;
  }
};

const checkConfrimPassword = function () {
  const confrimPassword = document.getElementById("confrimPassword");
  const confrimPasswordValue = confrimPassword.value.trim();
  const PasswordValueCheck = checkPassword();
  if (confrimPasswordValue === "") {
    setErrorFor(confrimPassword, "Password Confrim can't be blank");
    makeDisabel();
  } else if (PasswordValueCheck === confrimPasswordValue) {
    setSuccessFor(confrimPassword);
    return confrimPasswordValue;
  } else {
    setErrorFor(confrimPassword, "Password not match");
    makeDisabel();
  }
};

const checkTandC = function () {
  const temrsAndConditions = document.getElementById("terms-conditions");
  if (temrsAndConditions.checked) {
    setSuccessFor(temrsAndConditions);

    if (
      checkFullName() === 0 &&
      checkUserName() === 0 &&
      checkEmail() === 0 &&
      checkPhone() === 0 &&
      checkPassword() === checkConfrimPassword() &&
      checkPassword() !== undefined
    ) {
      console.log("show btn");
      signUp.disabled = false;
      signUp.classList.remove("disable-btn");
    } else {
      makeDisabel();
      temrsAndConditions.checked = false;
    }
  } else {
    setErrorFor(temrsAndConditions, "Select the check box");
    makeDisabel();
  }
};
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

function makeDisabel() {
  signUp.disabled = true;
  signUp.classList.add("disable-btn");
}
