let tiempo = 10 * 10;
let width = 1;

function progress() {
  let progress = document.getElementById("progress");
  let id = setInterval(frame, tiempo);
  progress.style.backgroundColor = "#fff";
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      width = 1;
      if (reinciarAuto === 1) {
        reniciarContador();
      }
    } else {
      width++;
      progress.style.width = width + "%";
      if (width >= 50 && width <= 70) {
        progress.style.backgroundColor = "#ff8c1a";
      } else {
        if (width >= 71) {
          progress.style.backgroundColor = "#e84e0f";
        }
      }
    }
  }
}

const reniciarContador = () => {
  tiempo = 10 * 10;
  width = 1;
  soundIncorrect.play();
  userAnswers.push(0);
  answerIncorrect();
  $answers.forEach((element) => {
    element.classList.remove("answerDetail--see");
  });
  setTimeout(() => {
    progress();
  }, 1800);
};
