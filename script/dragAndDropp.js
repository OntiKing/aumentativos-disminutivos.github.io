let listQuestion = [];
let optionsAnswers = [];
let rightAnswer = "";

async function loadQuestion() {
  const APIUrl = "./json/question.json";
  const result = await fetch(`${APIUrl}`);
  const data = await result.json();
  showQuestion(data);
}

function showQuestion(data) {
  //Aqui asigno lo que se tiene del json
  listQuestion = data.slice();

  // aqui desordeno las preguntas y respuestas
  listQuestion.sort(() => Math.random() - 0.5);
}

loadQuestion();

//enviamos la pregunta al DOM
const seeQuestion = (num) => {
  document.getElementById("question").textContent = listQuestion[num].question;

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
  console.log(arr);
  $optionOne.textContent = arr[0][1];
  $optionTwo.textContent = arr[1][1];
  $optionThree.textContent = arr[2][1];
};

// function showQuestion(data) {
//   console.log(data);
// }

// //funciones drag a drop

// const $fill = document.querySelector(".fill");
// const $empty = document.querySelector(".empty");
// const $imgAnswer = document.querySelectorAll(".imgAnswers");
// console.log($empty);
// console.log($imgAnswer);

// for (const imgDragg of $imgAnswer) {
//   imgDragg.addEventListener("dragstart", dragStart);
//   imgDragg.addEventListener("dragend", dragEnd);
// }

// function dragStart() {
//   console.log("iniciando arrastre");
// }

// function dragEnd(e) {
//   e.preventDefault();
//   //cuando el usuario suelta el elemento se puede ver el id del que se esta arrastrando
//   console.log(this);
// }

// // bucle de eventos dropp

// $empty.addEventListener("dragover", dragover);

// function dragover(e) {
//   e.preventDefault();
// }

// $empty.addEventListener("dragleave", dragLeave);

// function dragLeave() {
//   console.log("salir");
// }

// $empty.addEventListener("dragenter", dragEnter);

// function dragEnter() {
//   console.log(this);
// }

//bucle para asignar eventos a los contendores de imagen

//bucle a través de eventos vacíos y llamadas

// for (const empty of empties) {
//   empty.addEventListener("dragover", dragOver);
//   empty.addEventListener("dragenter", dragEnter);
//   empty.addEventListener("dragleave", dragLeave);
//   empty.addEventListener("drop", dragDrop);
// }

// // Fill listeners
// $fill.addEventListener("dragstart", dragStart);
// $fill.addEventListener("dragend", dragEnd);

// function dragStart() {
//   //this.className += " hold";
//   //   setTimeout(() => {
//   //     this.className = "invisible";
//   //   }, 0);
//   console.log("hola");
// }

// function dragEnd() {
//   this.className = "fill";
// }

// //Funciones que se agregaron en el for

// function dragOver(e) {
//   e.preventDefault();
//   this.className += " hovered";
// }

// function dragEnter(e) {
//   e.preventDefault();
// }

// function dragLeave() {
//   this.className = "empty";
//   console.log("B aqui");
// }

// function dragDrop() {
//   this.className = "empty";

//   this.append($fill);
//   console.log("C aqui");
// }

// $fill.addEventListener(
//   "touchmove",
//   function (event) {
//     if (event.targetTouches.length == 1) {
//       var touch = event.targetTouches[0];
//       // con esto solo se procesa UN evento touch
//       $fill.style.left = touch.pageX + "px";
//       $fill.style.top = touch.pageY + "px";
//     }
//   },
//   false
// );
