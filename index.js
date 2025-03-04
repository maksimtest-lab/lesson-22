const Car = class {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

// Класс дата
// const now = new Date();
const now = new Date();
console.log(now);


const oldDate = new Date(24*3600*1000); //  Fri Jan 02 1970 03:00:00 GMT+0300 (Moscow Standard Time)
console.log(oldDate);

const date = new Date('2022-10-10');
console.log(date);

// Геттеры
const date2 = new Date(2024, 0, -12);
console.log(date2);
console.log(date2.getFullYear());
console.log(date2.getMonth());
console.log(date2.getDay());
console.log(date2.getHours());
console.log(date2.getUTCDate());
console.log(date2.getDate());

// UTC варианты
console.log(date2.getUTCFullYear());
console.log(date2.getUTCMonth());
console.log(date2.getUTCDay());
console.log(date2.getUTCHours());
console.log(date2.getUTCDate());
console.log(date2.getUTCDate());


console.log(now.getTime());
console.log(now.getTimezoneOffset() / 60);

// Сеттеры
console.log(date);

date.setFullYear(2025);
date.setMonth(5);
date.setDate(11);
date.setHours(12);
date.setMinutes(13);
date.setSeconds(14);
date.setMilliseconds(15);
date.setTime(24*3600*1000);
console.log(date);

// UTC
date.setUTCFullYear(2025);
date.setUTCMonth(5);
date.setUTCDate(11);
date.setUTCHours(12);
date.setUTCMinutes(13);
date.setUTCSeconds(14);
date.setUTCMilliseconds(15);
// date.setUTCTime(24*3600*1000);
console.log(date);

// Вторая половина урока

const date3 = Date();


function diffSubtract(date1, date2) {
    return date2 - date1;
}

// Более производительная версия
function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
}

console.log(diffSubtract(new Date('2022-10-10'), new Date('2022-10-11')));
console.log(diffGetTime(new Date('2022-10-10'), new Date('2022-10-11')));

// Парсер даты
const date4 = Date.parse('2024-01-26T00:15:50.317-07:00'); //YYYY-MM-DDTHH:mm:ss.sssZ

const date5 = new Date(date4);
// YYYY-MM-DD год-месяц-день
// T разделитель
// HH:mm:ss.sss часы-минуты-секунды-миллисекунды
// Z часовой пояс

console.log(date4);
console.log(date5);

// Форматирование даты
// const locale = 'en-US' // через локаль отображается PM или AM
const locale = 'ru-RU' // тут нет
const date6 = new Date();

options = {
    // weekday: 'short', // narrow / short / long
    // year: 'numeric', // numeric / 2-digit
    // month: 'long', // narrow / numeric / 2-digit /short / long
    // day: 'numeric', // numeric / 2-digit
    hour: 'numeric', // numeric / 2-digit
    minute: 'numeric', // numeric / 2-digit
    // second: 'numeric', // numeric / 2-digit
    // timeZone: 'UTC'
}
// Чето не пашет((

console.log(date6);
console.log(date6.toLocaleString(locale));
console.log(date6.toLocaleString(locale, options), 'with options');
console.log(date6.toLocaleDateString(locale));
console.log(date6.toLocaleTimeString(locale));

// Порешаем задачки!!!
const getDayOfWeek = (date) => {
    const selectedDate = new Date(date);
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return days[selectedDate.getDay()];
}

const result = getDayOfWeek('2022-10-10');
console.log(result);

// Сколько дней до НГ

const getDaysUntilNewYear = () => {
    const now = new Date();
    const nextYear = now.getFullYear() + 1;
    const newYear = new Date(nextYear, 0, 1);
    const diff = newYear - now;

    // return diff;
    return Math.ceil(diff / (24 * 3600 * 1000));
}

const result2 = getDaysUntilNewYear();
console.log(result2);

// Возраст по дате рождения

const getAge = (birthDate) => {
    const userBirthDate = new Date(birthDate);
    const today = new Date();
    const age = today.getFullYear() - userBirthDate.getFullYear();

    if (today < new Date(today.getFullYear(), userBirthDate.getMonth(), userBirthDate.getDate())) {
        age -= 1;
    }

    return age;
}

const result3 = getAge('1979-01-19');

console.log(result3);

// Сравнение дат

const compareDates = (date1, date2) => {
    if (date1 < date2) {
        return 'Первая дата меньше второй';
    } else if (date1 > date2) {
        return 'Вторая дата меньше второй';
    }

    return 'Даты равны';
}

// Более быстрая версия
const compareDates2 = (date1, date2) => {
    const time1 = date1.getTime();
    const time2 = date2.getTime();

    if (time1 < time2) {
        return 'Первая дата меньше второй';
    } else if (time1 > time2) {
        return 'Вторая дата меньше второй';
    }

    return 'Даты равны';
}

const firstDate = new Date(2025, 1, 17);
const secondDate = new Date(2025, 1, 14);

const result4 = compareDates(firstDate, secondDate);
const result5 = compareDates2(firstDate, secondDate);

console.log(result4);
console.log(result5);