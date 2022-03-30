//09 Crear estrella para el contenedor final
const $starContainerEnd = document.getElementById("starContainerEnd");
const $score = document.getElementById("score");
const $imgTotalScore = document.getElementById("imgTotalScore");
let markTypeEnd = "";

function resultEnd() {
  //creamos la imagen final del resultado

  if (userAnswers.length <= 3) {
    console.log("llega");
    $imgTotalScore.classList.add("regular");
  } else {
    $imgTotalScore.classList.add("bueno");
  }
}

function createStartsEnd() {
  // const totalQuestion = numbersQuestions;

  const indicador = document.createElement("img");
  indicador.src = "img/estrella.svg";
  indicador.classList.add("imgStartsGame");
  indicador.classList.toggle(markTypeEnd);
  $starContainerEnd.appendChild(indicador);
}

//Crear tarjetas de acuerdo a los resultados

const mostrarResult = () => {
  resultEnd();
  document.getElementById("score").textContent = userAnswers.length;
  userAnswers.forEach((element) => {
    if (element === 1) {
      markTypeEnd = "correct";
      createStartsEnd();
    } else {
      markTypeEnd = "wrong";
      createStartsEnd();
    }
  });
};
