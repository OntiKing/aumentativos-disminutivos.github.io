let tiempo = 20 * 10;
let width = 1;

function progress() {
  let progress = document.getElementById("progress");

  let id = setInterval(frame, tiempo);

  function frame() {
    if (width >= 100) {
      clearInterval(id);
      width = 1;
    } else {
      width++;
      progress.style.width = width + "%";
    }
  }
}
