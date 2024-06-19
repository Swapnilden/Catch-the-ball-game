const basket = document.getElementById('basket');
const ball = document.getElementById('ball');
let basketLeft = window.innerWidth / 2 - 50;
let ballLeft = Math.random() * (window.innerWidth - 20);
let ballTop = 0;
let score = 0;

document.addEventListener('keydown', moveBasket);

function moveBasket(event) {
    if (event.key === 'ArrowLeft' && basketLeft > 0) {
        basketLeft -= 20;
    } else if (event.key === 'ArrowRight' && basketLeft < window.innerWidth - 100) {
        basketLeft += 20;
    }
    basket.style.left = basketLeft + 'px';
}

function dropBall() {
    ballTop += 5;
    if (ballTop > window.innerHeight - 30) {
        if (ballLeft > basketLeft && ballLeft < basketLeft + 100) {
            score++;
            alert('Score: ' + score);
        }
        resetBall();
    }
    ball.style.top = ballTop + 'px';
    ball.style.left = ballLeft + 'px';
    requestAnimationFrame(dropBall);
}

function resetBall() {
    ballTop = 0;
    ballLeft = Math.random() * (window.innerWidth - 20);
}

dropBall();
