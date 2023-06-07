let home = 0;
let guest = 0;

document.getElementById("btn1").addEventListener("click", function () {
  home = home + 1;
  updateHomeScore();
});

document.getElementById("btn2").addEventListener("click", function () {
  home = home + 2;
  updateHomeScore();
});

document.getElementById("btn3").addEventListener("click", function () {
  home = home + 3;
  updateHomeScore();
});

document.getElementById("btn4").addEventListener("click", function () {
  guest = guest + 1;
  updateGuestScore();
});

document.getElementById("btn5").addEventListener("click", function () {
  guest = guest + 2;
  updateGuestScore();
});

document.getElementById("btn6").addEventListener("click", function () {
  guest = guest + 3;
  updateGuestScore();
});

function updateGuestScore() {
  document.getElementById("guest-score").textContent = guest;
}

function updateHomeScore() {
  document.getElementById("home-score").textContent = home;
}
