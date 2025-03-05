// Подсчет рабочего времени

// Создайте функцию, которая принимает две даты и считает количество рабочих дней между ними (без учета выходных).


const countWorkingDays = (date1, date2) => {
    const date1Timestamp = date1.getTime();
    const date2Timestamp = date2.getTime();
    const timeDiff = date2Timestamp - date1Timestamp;
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    const workingDays = Math.ceil(daysDiff / 7) * 5;

    return workingDays;
}


const date1 = new Date('2025-01-01');
const date2 = new Date('2025-01-15');
console.log(countWorkingDays(date1, date2));