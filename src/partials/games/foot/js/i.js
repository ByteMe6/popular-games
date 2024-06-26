const field = document.getElementById('field');
const ball = document.getElementById('ball');

let ballX = 240;
let ballY = 140;
let isMouseDown = false;

field.addEventListener('mousedown', () => {
  isMouseDown = true;
});

field.addEventListener('mouseup', () => {
  isMouseDown = false;
});

field.addEventListener('mousemove', (event) => {
  if (isMouseDown) {
    const fieldRect = field.getBoundingClientRect();
    const mouseX = event.clientX - fieldRect.left;
    const mouseY = event.clientY - fieldRect.top;

    ballX = Math.max(10, Math.min(mouseX - 10, fieldRect.width - 30));
    ballY = Math.max(10, Math.min(mouseY - 10, fieldRect.height - 30));

    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;
  }
});