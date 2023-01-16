const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ul = document.querySelector('ul#ingredients');

// const elements = ingredients.forEach(item => {
//   const ingredientsEl = document.createElement('li');
//   ingredientsEl.classList.add('item');
//   ingredientsEl.textContent = item;
//   ul.appendChild(ingredientsEl);
//   console.log(ingredientsEl);
// });
let html = '';
ingredients.forEach(item => {
  html += '<li class="item">' + item + '</li>';
});
ul.insertAdjacentHTML("afterbegin", html);
