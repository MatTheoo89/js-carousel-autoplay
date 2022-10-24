console.log('link inserito ok');

const imgArray = [
  '01.jpg',
  '02.jpg',
  '03.jpg',
  '04.jpg',
  '05.jpg'
];

const prev = document.querySelector('.up');
const next = document.querySelector('.down');
console.log(next, prev);

let imgTags = '';

const slider = document.querySelector('.container-image');
// console.log(slider);

for(let i = 0; i < imgArray.length; i++){
  imgTags += `
  <img class="item hide" src="assets/img/${imgArray[i]}" alt="${imgArray[i]}">
  `;
  // console.log(imgTags);
}

let counterImg = 0;

slider.innerHTML = imgTags;

const items = document.getElementsByClassName('item');
console.log(items);

items[counterImg].classList.add('visible');


next.addEventListener('click', function(){
  items[counterImg].classList.remove('visible');
  
  if(counterImg === imgArray.length - 1){
    counterImg = 0;
  }
  else{
    counterImg++;
  }
  
  items[counterImg].classList.add('visible');
  
});


prev.addEventListener('click', function(){
items[counterImg].classList.remove('visible');
if(counterImg === 0){
  counterImg = imgArray.length - 1;
}
else{
  counterImg--;
}
items[counterImg].classList.add('visible');
});