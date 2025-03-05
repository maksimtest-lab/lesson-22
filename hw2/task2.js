// Напишите функцию, которая принимает две даты в формате "день.месяц.год" и возвращает разницу между ними в днях.

const dateDiff = (dateStr1, dateStr2) => {
    const date1 = Date.parse(dateStr1);
    const date2 = Date.parse(dateStr2);
    const timeDiff = date2 - date1;
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    return daysDiff;
}

const date1 = '2025-01-01';
const date2 = '2025-01-15';
console.log(dateDiff(date1, date2));