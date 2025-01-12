// Utility function to format time
function formatTime(seconds) {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `${hrs}:${mins}:${secs}`;
}

// Countdown Timer
function countdown(duration) {
  let remainingTime = duration;
  const timeDisplay = document.getElementById("time");
  const intervalId = setInterval(() => {
    timeDisplay.textContent = formatTime(remainingTime);
    if (remainingTime === 0) {
      clearInterval(intervalId);
      alert("Time is up!");
    }
    remainingTime--;
  }, 1000);
}

// Event Listener for Start Button
document.getElementById("startTimer").addEventListener("click", () => {
  const duration = 10 * 60; // 10 minutes
  countdown(duration);
});
