const numBerEl = document.querySelectorAll('li.item');
console.log('Number of categories:', numBerEl.length);

numBerEl.forEach(item => {
    console.log('Category:', item.querySelector('h2').textContent);
    console.log('Elements:', item.querySelectorAll('li').length);
});