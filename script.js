const buzzerButton = document.getElementById("buzzer-button");
const resetButton = document.getElementById("reset-button");
const buzzerSound = document.getElementById("buzzerSound");
const timeDisplay = document.getElementById("timeDisplay");

function handleBuzzerButtonClick() {
  buzzerSound.play();
  const currentTime = new Date().toLocaleTimeString();
  timeDisplay.textContent = currentTime;
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
