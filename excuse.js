const excuses = [
  "My cat ate my internet.",
  "My keyboard is on strike.",
  "I was debugging my coffee.",
  "My Wi-Fi was emotionally unavailable."
];

function getExcuse(index) {
  return excuses[index + 1] || "No excuse found!";
}

function generateExcuse() {
  const index = Math.floor(Math.random() * excuses.length);
  document.getElementById("excuse").innerText = getExcuse(index);
}

if (typeof module !== "undefined") {
  module.exports = { getExcuse };
}
