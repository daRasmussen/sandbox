const canvas = document.getElementById('canvas');
const maxPixels = 16;
let counter = 0;
while(counter < maxPixels) {
  let span = document.createElement('span');
  span.className = 'pixel';
  canvas.appendChild(span);
  counter++;
}
const pixels = document.getElementsByClassName('pixel');
for(let pixel of pixels) {
  pixel.addEventListener('mouseover', () => {
    pixel.classList.add('black');
  });
}
canvas.addEventListener('click', () => {
  for(let pixel of pixels) {
    pixel.classList.remove('black');
  }
})
