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
