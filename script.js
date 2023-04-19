let container = document.body;
let createBtn = document.querySelector("#createBtn");
let cleanBtn = document.querySelector("#cleanBtn");
let count = 0;

function createSquare() {
  let n = parseInt(prompt("Enter a size for the square"));

  if (!isNaN(n)) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${n * 50}px`;
    square.style.height = `${n * 50}px`;

    square.addEventListener("click", function () {
      if (count === 0) {
        square.classList.add("red");
        square.style.width = `${n * 100}px`;
        square.style.height = `${n * 100}px`;
      } else {
        square.classList.remove("red");
        square.classList.add("blue");
        alert(`Square size: ${n} x ${n}`);
        square.style.width = `${n * 200}px`;
        square.style.height = `${n * 200}px`;
      }
      count++;
    });

    container.appendChild(square);
  }
}

function cleanSquares() {
  container.innerHTML = "";
  count = 0;
}

createBtn.addEventListener("click", createSquare);
cleanBtn.addEventListener("click", cleanSquares);
