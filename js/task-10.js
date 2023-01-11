const input = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');

const elBoxes = document.querySelector('#boxes');
createBtn.addEventListener('click', (event) => {
  createBoxes(input.value);
})

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    let box = document.createElement('div')
    let size = `${i * 10 + 30}px`;
    box.style.width = size;
    box.style.height = size;
    box.style.backgroundColor = getRandomHexColor();
    elBoxes.appendChild(box);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
destroyBtn.addEventListener('click', destroyBoxes)
function destroyBoxes(event) {
  elBoxes.querySelectorAll("div").forEach(div => div.remove());
  input.value = 0;
}


