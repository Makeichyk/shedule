const paginationButton = document.querySelectorAll(".elem");
const img = document.querySelector(".img");

paginationButton.forEach((btn) => btn.addEventListener("click", slide));

function slide() {
  let index = this.outerText - 1;
  img.src = imgs[index];
}

let imgs = [
  "./Assets/Pn.png",
  "./Assets/Wt.png",
  "./Assets/Sr.png",
  "./Assets/Cz.png",
  "./Assets/Pt.png",
];
