let tiempo = 10 * 10;
let width = 1;

function progress() {
  let progress = document.getElementById("progress");
  let id = setInterval(frame, tiempo);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      width = 1;
      if (reinciarAuto === 1) {
        console.log("reiniciando contador");
        reniciarContador();
      }
    } else {
      width++;
      progress.style.width = width + "%";
    }
  }
}

const reniciarContador = () => {
  tiempo = 10 * 10;
  width = 1;
  soundCorrect.play();
  userAnswers.push(0);
  answerIncorrect();
  $answers.forEach((element) => {
    element.classList.remove("answerDetail--see");
  });
  setTimeout(() => {
    progress();
  }, 1800);
};
