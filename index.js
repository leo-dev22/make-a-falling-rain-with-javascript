const body = document.body;
setInterval(rainFall, 100);

function rainFall() {
  let audio = new Audio("media/audio.wav");
  audio.play();
  setTimeout(() => {
    audio.pause();
  }, 500);
  const waterDrop = document.createElement("i");
  waterDrop.classList.add("audio");
  waterDrop.classList.add("fas");
  waterDrop.classList.add("fa-tint");
  waterDrop.style.fontSize = Math.random() * 100 + "px";
  waterDrop.style.animationDuration = Math.random() * 2 + "s";
  waterDrop.style.opacity = Math.random() + 0.3;

  waterDrop.style.left = Math.random() * window.innerWidth + "px";

  body.appendChild(waterDrop);
  setTimeout(() => {
    waterDrop.remove();
  }, 1000);
}
