let tiempo = 150;
let width = 1;

function progress() {
  let progress = document.getElementById("progress");
  let id = setInterval(frame, tiempo);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      nextQuestion();
    } else {
      width++;
      progress.style.width = width + "%";
      if (width < 50) {
        progress.style.backgroundColor = "#8ccb41";
      } else {
        if (width < 70) {
          progress.style.backgroundColor = "#ff8c1a";
        } else {
          progress.style.backgroundColor = "#e84e0f";
        }
      }
    }
  }
}
