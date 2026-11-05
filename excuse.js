const excuses = [
  "My cat ate my internet.",
  "My keyboard is on strike.",
  "I was debugging my coffee.",
  "My Wi-Fi was emotionally unavailable.",
  "My CI/CD pipeline ate my homework."
  "My deployment pipeline needed emotional support."
];

function getExcuse(index) {
  return excuses[index] || "No excuse found!";
}

function generateExcuse() {
  const index = Math.floor(Math.random() * excuses.length);
  document.getElementById("excuse").innerText = getExcuse(index);
}

if (typeof module !== "undefined") {
  module.exports = { getExcuse };
}
