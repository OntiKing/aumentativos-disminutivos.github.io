let title, chapter, instructions;
let num = 0;
async function obtenerDatos() {
  const response = await fetch("./json/infoOda.json");
  const json = await response.json();

  title = json.titulo;
  chapter = json.chapter;
  instructions = json.instructions;

  let $title = document.getElementById("title");
  let $chapter = document.getElementById("chapter");
  let $instructions = document.getElementById("instructions");

  $title.textContent = title;
  $chapter.textContent = chapter;
  $instructions.textContent = instructions;
}

obtenerDatos();

/* Evento boton star */
const $infoBtn = document.getElementById("infoBtn__star"),
  $container__infoGame = document.getElementById("container__infoGame"),
  $container__starGame = document.getElementById("container__starGame");

$infoBtn.addEventListener("click", screenActive);

function screenActive() {
  soundAmbient.play();
  $container__infoGame.classList.add("hideInfoGame");
  //HABILITAR ESTO PARA QUE SE PUEDE VER EL CONTENEDOR DE JUEGO
  document
    .querySelector(".container__starGame")
    .classList.remove("container__starGame--Focus");
  seeQuestion(num);
  console.log(num);
  progress();
}
