// Сравнение дат

// Напишите функцию, которая принимает две даты и определяет, какая из них раньше.

const diffDates = (dateStr1, dateStr2) => {
    const date1 = new Date(Date.parse(dateStr1));
    const date2 = new Date(Date.parse(dateStr2));
    const diffDates = date1 - date2;

    if(diffDates < 0) return "Первая дата старше";
    if(diffDates > 0) return "Вторая дата старше";
    if(diffDates == 0) return "Две даты равны";
}


console.log(diffDates('2004-03-04', '2004-12-09'));
console.log(diffDates('2004-12-09', '2004-03-04'));
console.log(diffDates('2004-12-09', '2004-12-09'));
console.log(diffDates('2004-12-09', '2004-12-09T12:00'));