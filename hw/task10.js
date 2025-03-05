// Вывод даты в разных форматах

// Создайте функцию, которая принимает дату и форматирует её в нескольких вариантах:

//     13 февраля 2025 г.
//     Thursday, 13 February 2025
//     2025-02-13 14:30:00

const formatedDate = (date) => {

    return {
        oneFormat: date.toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: '2-digit' }),
        twoFormat: date.toLocaleDateString(undefined, {weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' }),
        thirdFormat: date.toISOString().slice(0, 19).replace("T", " ")
    }
}


console.log(formatedDate(new Date()));