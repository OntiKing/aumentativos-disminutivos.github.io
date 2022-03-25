//enviamos la pregunta al DOM
let optionsAnswers = [];
let rightAnswer = "";

const $optionsAnswers = document.getElementById("optionsAnswers");
const $answerDetail = document.getElementById("answerDetail");

const seeQuestion = (num) => {
  document.getElementById("question").textContent = listQuestion[num].question;
  document.getElementById("postGame__Text").textContent =
    listQuestion[num].postQuestion;
  optionsAnswers = listQuestion[num].answers;

  // ******* PARA AGREGAR UNA IMAGEN DESDE JSON
  const $image = document.getElementById("imgQuestion");
  $image.src = listQuestion[num].imagen;
  // ********************************************

  //   convertimos el objeto en array para poder realizar el random
  const $optionOne = document.getElementById("optionOne");
  const $optionTwo = document.getElementById("optionTwo");
  const $optionThree = document.getElementById("optionThree");

  let arr = Object.entries(optionsAnswers);
  arr.sort(() => Math.random() - 0.5);
  arr.forEach((element) => {
    if (element[0] == "answerC") {
      rightAnswer = element[1];
    }
  });
  // console.log(arr);
  $optionOne.textContent = arr[0][1];
  $optionTwo.textContent = arr[1][1];
  $optionThree.textContent = arr[2][1];
};

//Vamos la siguiente pregunta y se reinicia el contador
const nextQuestion = () => {
  if (num === totalQuestions - 1) {
    console.log("Mostrar pantalla de estrellas");
  } else {
    resetQuestion();
  }
};

const resetQuestion = () => {
  $answerDetail.style.opacity = 0.1;
  $answerDetail.textContent = "";
  num = num + 1;
  console.log(num);
  width = 1;
  progress();
  seeQuestion(num);
};

// verificamos que opcion eligio el usuario

$optionsAnswers.addEventListener("click", (e) => {
  if (e.target.textContent === rightAnswer) {
    $answerDetail.classList.add("optionsAnswer__correct");
    $answerDetail.textContent = rightAnswer;
    updateAnswerStarts("correct");
    setTimeout(() => {
      nextQuestion();
    }, 3000);
  } else {
    console.log("respuesta incorrecta");
    updateAnswerStarts("wrong");
    setTimeout(() => {
      nextQuestion();
    }, 2000);
  }
});
