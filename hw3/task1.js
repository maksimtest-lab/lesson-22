// Создайте маленькое одностраничное веб-приложение, которое определяет часовой пояс браузера пользователя, и на основе этого отображает часть дня пользователя.

const userTimezone = new Date().getTimezoneOffset();
// The number of minutes returned by getTimezoneOffset() is positive if the local time zone is behind UTC, and negative if the local time zone is ahead of UTC. For example, for UTC+10, -600 will be returned.
let hours = Math.floor(-1 * userTimezone / 60);
let minutes = userTimezone % 60;

if (hours < 10) hours = "0" + hours;
if (minutes < 10) minutes = "0" + minutes;

console.log(`Таймзона пользователя: ${hours}:${minutes}`);