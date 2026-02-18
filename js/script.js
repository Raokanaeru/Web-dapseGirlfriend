// Countdown Timer Script
const countdownDate = new Date().getTime() + (3 * 24 * 60 * 60 * 1000); // 3-day countdown
const countdownElement = document.getElementById('countdown-timer');

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(interval);
        countdownElement.innerHTML = "FLASH SALE ENDED";
    }
}

let interval = setInterval(updateCountdown, 1000);
