import "./styles.css";
import { colors } from "./js/colors.js";
import refs from "./js/refs.js";

const { startBtn, h1, body, pauseBtn } = refs;

let intervalId = null;
let startColorize = null;
let pauseColorize = null;

colorizeBtnStart();
colorizeTitle();

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

pauseBtn.disabled = true;
const bodyColorize = () => {
  intervalId = setInterval(() => {
    startBtn.disabled = true;
    body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
};

const bodyClear = () => {
  clearInterval(intervalId);
  body.style.backgroundColor = "";
  intervalId = null;
};

startBtn.addEventListener("click", () => {
  bodyColorize();
  btnDisable(startBtn, startColorize);
  colorizeBtnPause();
  pauseBtn.disabled = false;
});

pauseBtn.addEventListener("click", () => {
  bodyClear();
  btnDisable(pauseBtn, pauseColorize);
  colorizeBtnStart();
  startBtn.disabled = false;
});

const btnDisable = (btn, interval) => {
  btn.disabled = true;
  btn.style.backgroundColor = "";
  clearInterval(interval);
  interval = null;
};

function colorizeBtnStart() {
  startColorize = setInterval(() => {
  }, 500);
}

function colorizeBtnPause() {
  pauseColorize = setInterval(() => {
     }, 500);
}

function colorizeTitle() {
  setInterval(() => {
  }, 500);
}
