// Таймер с обновлением на странице

// Реализуйте таймер, который обновляет время каждую секунду и отображает его на веб-странице.

const timer = () => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    document.getElementById('timer').innerHTML = `${hours}:${minutes}:${seconds}`;

    // return `${hours}:${minutes}:${seconds}`;
}

timer();

setInterval(() => {
    timer();
}, 1000);

