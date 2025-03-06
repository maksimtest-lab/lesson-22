// Напишите функцию, которая принимает две даты и выводит человекочитаемую разницу между ними (например, "2 дня назад", "через 5 часов", "более года назад" и т.д.).

const compareTwoDates = (dateStart, dateEnd) => {
    let date1 = new Date(dateStart);
    let date2 = new Date(dateEnd);

    if (date1 < date2) {
        [date2, date1] = [date1, date2];
    }

    const dateDiff = date1 - date2;

    const minutesBetween = Math.trunc(dateDiff / 1000 / 60);
    const hoursBetween = Math.trunc(minutesBetween / 60);
    const daysBetween =  Math.trunc(hoursBetween / 24);
    const yearsBetween = Math.trunc(daysBetween /365);

    // Годы
    if (yearsBetween > 1 ) {
        return "более года назад";
    }

    // Дни
    if (daysBetween >= 5 ) {
        return `${daysBetween} дней назад`;
    }

    if (daysBetween >= 2 ) {
        return `${daysBetween} дня назад`;
    }

    if (daysBetween == 1 ) {
        return "один день назад";
    }

    // Часы
    if (hoursBetween >= 5 ) {
        return `${hoursBetween} часов назад`;
    }
    if (hoursBetween >= 2 ) {
        return `${hoursBetween} часа назад`;
    }
    if (hoursBetween == 1 ) {
        return "час назад";
    }

    if (minutesBetween >= 5 ) {
        return `${minutesBetween} минут назад`;
    }
    if (minutesBetween >= 2 ) {
        return `${minutesBetween} минуты назад`;
    }
    if (minutesBetween == 1 ) {
        return "минуту назад";
    }

}

console.log(compareTwoDates('2025-03-10T12:00', '2025-03-10T14:59'));
console.log(compareTwoDates('2025-03-10', '2025-03-15'));
console.log(compareTwoDates('2025-03-20', '2025-03-25'));
console.log(compareTwoDates('2025-03-30', '2025-04-05'));
console.log(compareTwoDates('2025-03-31', '2025-04-04'));
console.log(compareTwoDates('2021-04-30', '2024-03-04'));
console.log(compareTwoDates('2025-01-31', '2025-05-04'));