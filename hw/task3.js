// День недели

// Напишите функцию, которая принимает дату и возвращает название дня недели.


const getWeekName = (dateStr) => {
    const date = new Date(Date.parse(dateStr));
    const weekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    return weekNames[date.getDay()];
}

const getWeekName2 = (dateStr) => {
    const date = new Date(Date.parse(dateStr));

    return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

console.log(getWeekName('2025-03-04'));
console.log(getWeekName2('2025-03-04'));