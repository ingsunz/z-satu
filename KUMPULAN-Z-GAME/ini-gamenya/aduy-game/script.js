const cat = document.getElementById('cat');
const gameArea = document.getElementById('gameArea');
const scoreDisplay = document.getElementById('score');

let score = 0;

// Fungsi untuk memindahkan kucing ke posisi random
function moveCat() {
    const x = Math.random() * (gameArea.offsetWidth - cat.offsetWidth);
    const y = Math.random() * (gameArea.offsetHeight - cat.offsetHeight);
    cat.style.left = `${x}px`;
    cat.style.top = `${y}px`;
}

// Ketika kucing diklik
cat.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    moveCat();
});

// Pindahkan kucing secara otomatis setiap 1 detik
setInterval(moveCat, 1000);

let timeLeft = 30; // Waktu dalam detik
const timerDisplay = document.getElementById('timer');

// Fungsi untuk mengurangi waktu
function startTimer() {
    const timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

// Fungsi untuk mengakhiri permainan
function endGame() {
    alert(`Game Over! Your score is ${score}`);
    cat.style.pointerEvents = 'none'; // Nonaktifkan klik pada kucing

}

// Mulai timer saat game dimulai
startTimer();

const errorSound = new Audio('sounds/error.mp3');

cat.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    errorSound.play(); // Mainkan suara
    moveCat();
});

