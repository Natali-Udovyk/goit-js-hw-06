const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const ul = document.querySelector('.gallery');

const elements = images.forEach(image => {
  ul.insertAdjacentHTML("afterbegin", '<li><img alt=' + image.alt + ' src=' + image.url + '></img></li>')
  //   const li = document.createElement('li');
  //   const img = document.createElement('img');
  // img.alt = ;
  // img.src = image.url;

  //   li.appendChild(img);
  //   ul.appendChild(li);
  //   console.log(image);
});


