let current = document.querySelector('#current');
const imgs = document.querySelector('.imgs');
const img = document.querySelectorAll('.imgs img');
const mainImg = document.getElementById('main-img');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
let captionContainer = document.getElementById('caption-container');
const opacity = 0.6;

let images = [];
for(let idx=0; idx <= 15; idx+=1) {
images.push(`gallery/img-${idx}.jpg`);
}

let currentIndex = 0;

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage(); 
  fadeImages();
  img[currentIndex].style.opacity = "0.6";
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
  fadeImages();
  img[currentIndex].style.opacity = "0.6";
});

function updateImage() {
  let current = mainImg.querySelector('#current');
  current.src = images[currentIndex];
  current.classList.add('fade-out');
  setTimeout(() => current.classList.remove('fade-out'), 500);
  captionContainer.innerHTML = img[currentIndex].alt; 
}

document.getElementById('caption-container').innerHTML = "Photo taken by Fred Stewart from Greene Memorial Hospital";

img[0].style.opacity = opacity;

const fadeImages = () => { 
  img.forEach(img=> img.style.opacity = '1')
}

img.forEach((img, index) => { 
  img.addEventListener('click', (e) => { 
    current.src = e.target.src;
    fadeImages();
    img.style.opacity = '0.6';
    currentIndex = index;
    current.classList.add('fade-out');
    setTimeout(() => current.classList.remove('fade-out'), 500);
    captionContainer.innerHTML = img.getAttribute('alt');
  });
});




