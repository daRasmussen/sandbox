const canvas = document.getElementById('canvas');
const maxPixels = 16;
let counter = 0;
while(counter < maxPixels) {
  let span = document.createElement('span');
  span.className = 'pixel';
  canvas.appendChild(span);
  counter++;
}
