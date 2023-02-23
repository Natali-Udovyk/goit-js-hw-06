// const inputEl = document.querySelector('#validation-input');
// inputEl.addEventListener('blur', onInputBlur);
// function onInputBlur(event) {
//     if (inputEl.value.length > inputEl.getAttribute("data-length")) {
//         inputEl.classList = "invalid";
//     } else {
//         inputEl.classList = "valid";
//     }
// }

const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onInputBlur);
function onInputBlur(event) {
    if (inputEl.value.length != inputEl.dataset.length) {
        inputEl.classList = "invalid";
    } else {
        inputEl.classList = "valid";
    }
}