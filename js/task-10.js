function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");

const createBoxes = (amount) => {
  destroyBoxes();
  const boxesArr = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxesArr.push(div);
  }
  boxes.append(...boxesArr);
};

const destroyBoxes = () => {
  boxes.innerHTML = "";
};

create.addEventListener("click", () => createBoxes(input.value));
destroy.addEventListener("click", destroyBoxes);
