// const nameInp = document.querySelector('#name-input');
// const nameOutp = document.querySelector('#name-output');

// nameInp.addEventListener("enter", onNameInp);

// function onNameInp(event) {
//     event.preventDefault();

// }

// const handleClick = (event) => {
//     nameInp.currentTarget.textContent = nameOutp.textContent;
//     console.log(event)
// }

const refs = {
    nameInp: document.querySelector('#name-input'),
    nameOutp: document.querySelector('#name-output'),
};
refs.nameInp.addEventListener('input', onNameInp);
function onNameInp(event) {

    refs.nameOutp.textContent = event.currentTarget.value;
    console.log(event.currentTarget.value);
}