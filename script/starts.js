// funcion para crear estrellas

const $starContainer = document.getElementById("starContainer");
const $scoreContent = document.getElementById("scoreContent");
const totalQuestion = 10;
let currentQuestion = 0;
let optionsUser = 0;

function createStarts() {
  // const totalQuestion = numbersQuestions;

  for (let i = 0; i < totalQuestion; i++) {
    const indicador = document.createElement("img");
    indicador.src = "img/estrella.svg";
    indicador.classList.add("imgStartsGame");
    $starContainer.appendChild(indicador);
  }
}

createStarts();

//08 esta funcion pinta de color la estrella sea correcta o no
function updateAnswerStarts(markType) {
  if (markType === "correct") {
    $starContainer.children[currentQuestion].classList.toggle(markType);
    currentQuestion = currentQuestion + 1;
  }
  if (markType === "wrong") {
    $starContainer.children[currentQuestion].classList.toggle(markType);
    currentQuestion = currentQuestion + 1;
  }
}
