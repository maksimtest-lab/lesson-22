// Форматирование даты

// Выведите текущую дату в формате ДД.ММ.ГГГГ (например, 13.02.2025).

const date = new Date();

const formatDate = (date) => {
    let month = '' + (date.getMonth() + 1),
        day = '' + date.getDate(),
        year = date.getFullYear();

    if (month <= 9) {
        month = '0' + month;
    }

    if (day <= 9) {
        day = '0' + day;
    }

    return `${day}.${month}.${year}`;
}

console.log(formatDate(date));