// Напишите функцию, которая принимает дату в формате "день.месяц.год" и возвращает её в формате "год-месяц-день".

const getFormatedDate = (dateStr) => {

    let [day, month, year] = dateStr.split('.');
    const date = new Date(year, (month-1), day);

    day = date.getDate();
    month = date.getMonth() + 1; // месяца начинаются с 0
    year = date.getFullYear();

    if(day < 10) day = '0' + day;
    if(month < 10) month = '0' + month;

    return `${year}-${month}-${day}`;
}

console.log(getFormatedDate('28.12.2004'));
console.log(getFormatedDate('01.01.2014'));
