//enviamos la pregunta al DOM
let optionsAnswers = [];
let rightAnswer = "";
let activeNextAnswer = 0;
let userAnswers = [];
let img = "";
const $optionsAnswers = document.getElementById("optionsAnswers");
const $answerDetail = document.getElementById("answerDetail");
const $answers = document.querySelectorAll(".answers");

let $answerActive = "";
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
    document
      .querySelector(".container__starGame")
      .classList.add("container__starGame--Focus");
    document
      .getElementById("container__endGame")
      .classList.remove("container__endGame--focus");

    mostrarResult();
  } else {
    resetQuestion();
  }
};

const resetQuestion = () => {
  const $imgDinaTeo = document.getElementById("imgDinaTeo");

  $imgDinaTeo.classList.remove("animationDinaTeo");
  $answerDetail.classList.remove("optionsAnswer__correct");
  $answerDetail.textContent = "";
  $optionsAnswers.focus();

  //Aqui cambiamos la imagen de teo u dina despues de una pregunta

  if (img === "teo") {
    $imgDinaTeo.src = "img/teo.svg";
    $imgDinaTeo.classList.add("animationDinaTeo");
    img = "dina";
  } else {
    $imgDinaTeo.src = "img/dina.svg";
    $imgDinaTeo.classList.add("animationDinaTeo");
    img = "teo";
  }

  num = num + 1;

  //aqui recorre los elementos answer para darles el evento de aparecer
  $answers.forEach((element) => {
    element.classList.add("answerDetail--see");
  });
  seeQuestion(num);
  activeNextAnswer = 0;
};

// verificamos que opcion eligio el usuario
$optionsAnswers.addEventListener("click", (e) => {
  //eliminar el evento de aparecer de las answer
  $answers.forEach((element) => {
    element.classList.remove("answerDetail--see");
  });

  if (activeNextAnswer === 0) {
    if (e.target.textContent === rightAnswer) {
      soundCorrect.play();
      $answerActive = document.getElementById(`${e.target.id}`);
      $answerActive.classList.add("answersCorrect");

      userAnswers.push(1);

      answerCorrect();
    } else {
      soundIncorrect.play();
      $answerActive = document.getElementById(`${e.target.id}`);
      $answerActive.classList.add("answersIncorrect");
      userAnswers.push(0);

      answerIncorrect();
    }
    activeNextAnswer = 1;
  }
});

const answerCorrect = () => {
  $answerDetail.classList.add("optionsAnswer__correct");
  $answerDetail.textContent = rightAnswer;

  updateAnswerStarts("correct");

  width = 100;
  setTimeout(() => {
    nextQuestion();
    $answerActive.classList.remove("answersCorrect");

    progress();
  }, 3000);
};

const answerIncorrect = () => {
  width = 100;
  updateAnswerStarts("wrong");

  setTimeout(() => {
    nextQuestion();
    $answerActive.classList.remove("answersIncorrect");

    progress();
  }, 2000);
};
