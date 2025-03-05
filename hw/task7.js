// Добавление дней

// Реализуйте функцию, которая принимает дату и число дней, добавляет их к дате и возвращает новый объект Date.

const addDays = (dateStr, days) => {
    const date = new Date(Date.parse(dateStr));

    return new Date(date.setDate(date.getDate() + days));
}


console.log(addDays('2004-03-04', 1));
console.log(addDays('2004-03-04', -1));
console.log(addDays('2004-03-04', -90));
console.log(addDays('1970-01-01', 30));