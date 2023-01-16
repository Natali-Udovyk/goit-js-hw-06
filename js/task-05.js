

// const handleClick = (event) => {
// nameInp.currentTarget.textContent = nameOutp.textContent;
//     console.log(event)
// }

const refs = {
    nameInp: document.querySelector('#name-input'),
    nameOutp: document.querySelector('#name-output'),
};
refs.nameInp.addEventListener('input', event => {
    if (event.currentTarget.value.length > 0) {
        refs.nameOutp.textContent = event.currentTarget.value;
    } else {
        refs.nameOutp.textContent = 'Anonymous';
    }
});