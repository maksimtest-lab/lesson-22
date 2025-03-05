// Отображение времени по разным часовым поясам

// Напишите скрипт, который показывает текущее время в Москве, Нью-Йорке и Токио.

const getTimesInCities = () => {

    return {
        'Moscow': new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"}),
        'NewYork': new Date().toLocaleString("en-US", {timeZone: "America/New_York"}),
        'Tokyo': new Date().toLocaleString("en-US", {timeZone: "Asia/Tokyo"}),

    }
}

console.log(getTimesInCities());