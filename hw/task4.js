// Разница во времени

// Вычислите, сколько дней осталось до Нового года.

const daysRestToNewYear = () => {
    const date = new Date();
    const year = date.getFullYear();
    const newYear = new Date(year + 1, 0, 1);
    const diffDate = newYear - date;
    const days = diffDate / 1000 / 60 / 60 / 24;

    return Math.trunc(days);
}

console.log(daysRestToNewYear());