// VRAM Monitor
let vram = 75;
setInterval(() => {
  vram = Math.max(10, Math.min(99, vram + (Math.random() * 10 - 5)));
  document.getElementById("vramValue").textContent = vram.toFixed(0) + "%";
}, 1000);

// Language Matrix
const languages = ["PL", "EN", "DE", "ES", "FR"];
let langIndex = 0;
setInterval(() => {
  langIndex = (langIndex + 1) % languages.length;
  document.getElementById("lang").textContent = languages[langIndex];
}, 3000);
