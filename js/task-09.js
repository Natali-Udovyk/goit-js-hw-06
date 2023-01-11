const element = document.querySelector('.color');
const elementBtn = document.querySelector('.change-color');
const bodyEl = document.querySelector('body')
elementBtn.addEventListener('click', () => {
  let hexColor = [getRandomHexColor()];
  bodyEl.style.backgroundColor = hexColor;
  element.textContent = hexColor;
});
function getRandomHexColor() {
  // event.preventDefault();
  // element.style.color = bodyEl.style.backgroundColor;
  // console.log()
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
