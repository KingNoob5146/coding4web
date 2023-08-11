const square = document.getElementById('square');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const changeColorButton = document.getElementById('changeColor');

increaseButton.addEventListener('click', () => {
  const currentSize = parseInt(getComputedStyle(square).width);
  square.style.width = currentSize + 50 + 'px';
  square.style.height = currentSize + 50 + 'px';
});

decreaseButton.addEventListener('click', () => {
  const currentSize = parseInt(getComputedStyle(square).width);
  if (currentSize > 20) {
    square.style.width = currentSize - 50 + 'px';
    square.style.height = currentSize - 50 + 'px';
  }
});

changeColorButton.addEventListener('click', () => {
  if (square.style.backgroundColor === 'red') {
    square.style.backgroundColor = 'green';
  } else {
    square.style.backgroundColor = 'red';
  }
});
