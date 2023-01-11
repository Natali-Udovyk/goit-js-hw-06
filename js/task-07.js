const inpEl = document.querySelector('#font-size-control');
const el = document.querySelector('#text');
inpEl.addEventListener('input', onInputRange);
function onInputRange(event) {
    el.style.fontSize = inpEl.value + "px";
}