let lastFrameTime = performance.now();
let frameRates = [];

const statusDiv = document.getElementById("status");
const fpsDiv = document.getElementById("fps");
const simulateBtn = document.getElementById("simulate-btn");

// Simulate flicker button
simulateBtn.addEventListener("click", () => {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "black" ? "#0e1117" : "black";
});

function checkFlicker() {
  const now = performance.now();
  const delta = now - lastFrameTime;
  lastFrameTime = now;

  // Store frame intervals
  frameRates.push(delta);

  // Keep only last 60 frames
  if (frameRates.length > 60) frameRates.shift();

  // Detect instability
  const avg = frameRates.reduce((a, b) => a + b, 0) / frameRates.length;
  const unstable = frameRates.some((f) => Math.abs(f - avg) > 20);

  const fps = Math.round(1000 / avg);
  fpsDiv.textContent = `FPS: ${fps}`;

  if (unstable) {
    statusDiv.textContent = "Unstable 🔴";
    statusDiv.classList.remove("good");
    statusDiv.classList.add("bad");
    document.body.style.filter = "brightness(0.9)";
    console.warn("⚠️ Flicker detected!");
  } else {
    statusDiv.textContent = "Stable 🟢";
    statusDiv.classList.remove("bad");
    statusDiv.classList.add("good");
    document.body.style.filter = "brightness(1)";
  }

  requestAnimationFrame(checkFlicker);
}

checkFlicker();
