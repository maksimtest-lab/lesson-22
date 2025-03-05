// Таймер обратного отсчета

// Создайте программу, которая выводит в консоль обратный отсчет от текущего времени до конца дня.

const timeUntilDayEnd = () => {
    const dateNow = new Date();
    const dayEnd = new Date();

    dayEnd.setDate(dayEnd.getDate() + 1);
    dayEnd.setMilliseconds(0);
    dayEnd.setHours(0);
    dayEnd.setMinutes(0);
    dayEnd.setSeconds(0);

    const millisecondsToEndOff = dayEnd - dateNow;

    let hours = Math.floor((millisecondsToEndOff / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((millisecondsToEndOff / (1000 * 60)) % 60);
    let seconds = Math.floor((millisecondsToEndOff / 1000) % 60);

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    console.log(`${hours}:${minutes}:${seconds}`);

    return {
        hours: hours,
        minutes: minutes,
        seconds: seconds
    }
}


const interval = setInterval(timeUntilDayEnd, 1000);