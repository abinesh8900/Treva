const hoverBlue = document.querySelector("#hover-blue");
const hoverRed = document.querySelector("#hover-red");
const hoverGreen = document.querySelector("#hover-green");
const hoverPink = document.querySelector("#hover-pink");
const hoverSkyblue = document.querySelector("#hover-skyblue");
const hoverPurpel = document.querySelector("#hover-purpel");

const circleBlue = document.querySelector(".nav-item__circle-blue");
const circleRed = document.querySelector(".nav-item__circle-red");
const circleGreen = document.querySelector(".nav-item__circle-green");
const circlePink = document.querySelector(".nav-item__circle-pink");
const circleSkyblue = document.querySelector(".nav-item__circle-skyblue");
const circlePurpel = document.querySelector(".nav-item__circle-purpel");

const hireEditIcon = document.querySelector("#hire__edit-icon");
const hireDoneIcon = document.querySelector("#hire__done-icon");
const hirePeopleIcon = document.querySelector("#hire__people-icon");
const workJobIcon = document.querySelector("#work__job-icon");
const workDoneIcon = document.querySelector("#work-done-icon");
const workPeopleIcon = document.querySelector("#work-people-icon");

const textBule = document.querySelector("#text-blue");
const textRed = document.querySelector("#text-red");
const textGreen = document.querySelector("#text-green");
const textPink = document.querySelector("#text-pink");
const textSkyblue = document.querySelector("#text-skyblue");
const textPurpel = document.querySelector("#text-purpel");

hoverBlue.addEventListener("mouseover", function () {
  hoverBlue.classList.add("warp__nav-item-blue");
  textBule.classList.add("nav-item__text-blue");
  circleBlue.classList.add("fill-bg-blue");
  hireEditIcon.classList.add("color-white");
});
hoverBlue.addEventListener("mouseout", function () {
  hoverBlue.classList.remove("warp__nav-item-blue");
  textBule.classList.remove("nav-item__text-blue");
  circleBlue.classList.remove("fill-bg-blue");
  hireEditIcon.classList.remove("color-white");
});

hoverRed.addEventListener("mouseover", function () {
  hoverRed.classList.add("warp__nav-item-red");
  textRed.classList.add("nav-item__text-red");
  circleRed.classList.add("fill-bg-red");
  hireDoneIcon.classList.add("color-white");
});
hoverRed.addEventListener("mouseout", function () {
  hoverRed.classList.remove("warp__nav-item-red");
  textRed.classList.remove("nav-item__text-red");
  circleRed.classList.remove("fill-bg-red");
  hireDoneIcon.classList.remove("color-white");
});

hoverGreen.addEventListener("mouseover", function () {
  hoverGreen.classList.add("warp__nav-item-green");
  textGreen.classList.add("nav-item__text-green");
  circleGreen.classList.add("fill-bg-green");
  hirePeopleIcon.classList.add("color-white");
});
hoverGreen.addEventListener("mouseout", function () {
  hoverGreen.classList.remove("warp__nav-item-green");
  textGreen.classList.remove("nav-item__text-green");
  circleGreen.classList.remove("fill-bg-green");
  hirePeopleIcon.classList.remove("color-white");
});

hoverPink.addEventListener("mouseover", function () {
  hoverPink.classList.add("warp__nav-item-pink");
  textPink.classList.add("nav-item__text-pink");
  circlePink.classList.add("fill-bg-pink");
  workJobIcon.classList.add("color-white");
});
hoverPink.addEventListener("mouseout", function () {
  hoverPink.classList.remove("warp__nav-item-pink");
  textPink.classList.remove("nav-item__text-pink");
  circlePink.classList.remove("fill-bg-pink");
  workJobIcon.classList.remove("color-white");
});

hoverSkyblue.addEventListener("mouseover", function () {
  hoverSkyblue.classList.add("warp__nav-item-skyblue");
  textSkyblue.classList.add("nav-item__text-skyblue");
  circleSkyblue.classList.add("fill-bg-skyblue");
  workDoneIcon.classList.add("color-white");
});
hoverSkyblue.addEventListener("mouseout", function () {
  hoverSkyblue.classList.remove("warp__nav-item-skyblue");
  textSkyblue.classList.remove("nav-item__text-skyblue");
  circleSkyblue.classList.remove("fill-bg-skyblue");
  workDoneIcon.classList.remove("color-white");
});

hoverPurpel.addEventListener("mouseover", function () {
  hoverPurpel.classList.add("warp__nav-item-purpel");
  textPurpel.classList.add("nav-item__text-purpel");
  circlePurpel.classList.add("fill-bg-purpel");
  workPeopleIcon.classList.add("color-white");
});
hoverPurpel.addEventListener("mouseout", function () {
  hoverPurpel.classList.remove("warp__nav-item-purpel");
  textPurpel.classList.remove("nav-item__text-purpel");
  circlePurpel.classList.remove("fill-bg-purpel");
  workPeopleIcon.classList.remove("color-white");
});
