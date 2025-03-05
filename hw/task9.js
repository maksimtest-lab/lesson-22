// Парсинг даты из строки

// Напишите функцию, которая принимает строку формата YYYY-MM-DD и преобразует её в объект Date.

const parseDate = (dateStr) => {
    const date = new Date(Date.parse(dateStr));

    return date;
}


console.log(parseDate('2004-03-04'));
console.log(parseDate('2004-03-04'));
console.log(parseDate('2004-03-04'));
console.log(parseDate('1970-01-01'));