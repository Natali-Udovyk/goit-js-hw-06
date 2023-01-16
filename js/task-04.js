
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const counterValue = document.querySelector("#value");
let counter = 0;

decrementBtn.addEventListener('click', () => {
    counter -= 1;
    counterValue.textContent = counter;
});

incrementBtn.addEventListener('click', () => {
    counter += 1;
    counterValue.textContent = counter;
});
