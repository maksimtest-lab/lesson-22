// Возраст по дате рождения

// Напишите функцию, которая принимает дату рождения и вычисляет возраст.

const getFullYearsFromBirthday = (dateStr) => {
    const birthDate = new Date(Date.parse(dateStr));
    const nowDate = new Date();
    const diffDates = nowDate - birthDate;

    const yearsOld = diffDates / 1000 / 60 / 60 / 24 / 365;

    if (yearsOld < 0) {
        throw Error("Wrong birthday");
    }

    return yearsOld;
}

console.log(getFullYearsFromBirthday('2004-03-04'));
console.log(getFullYearsFromBirthday('2004-12-09'));
console.log(getFullYearsFromBirthday('2025-01-09'));
console.log(getFullYearsFromBirthday('2025-06-09'));