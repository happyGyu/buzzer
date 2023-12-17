const buzzerButton = document.getElementById("buzzer-button");
const resetButton = document.getElementById("reset-button");
const buzzerSound = document.getElementById("buzzerSound");
const timeDisplay = document.getElementById("timeDisplay");

function getFormattedCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours());
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const milliseconds = String(now.getMilliseconds()).padStart(3, "0");
  return `${hours}시 ${minutes}분 ${seconds}.${milliseconds}초`;
}

function handleBuzzerButtonClick() {
  buzzerSound.play();
  timeDisplay.textContent = getFormattedCurrentTime();
  resetButton.classList.remove("hide");
}

function handleResetButtonClick() {
  timeDisplay.textContent = "";
  resetButton.classList.add("hide");
}

function init() {
  buzzerButton.addEventListener("click", handleBuzzerButtonClick);
  resetButton.addEventListener("click", handleResetButtonClick);
}

init();
