// Créer la logique de compte à rebours

// choice.value = 5 minutes

// choice.value * 60 = totalSeconds

// let minutes = Math.floor(totalSeconds / 60);
// let seconds = totalSeconds % 60

// Créer un événement à la validation du form pour lancer le compte à rebours

start.addEventListener("click", (e) => {
  e.preventDefault();
  let seconds = choice.value * 60;

  auto = setInterval(() => {
    let second = seconds % 60;
    if (second < 10) second = "0" + second;
    countdownDisplay.innerHTML = Math.floor(seconds / 60) + ":" + second;

    seconds--;
    if (seconds < 0) clearInterval(auto);
  }, 1000);
});
