// Напишите функцию, которая принимает радиус окружности и возвращает её длину, используя значение числа Пи из объекта Math.

const circleLength = (radius) => {
    return 2 * Math.PI * radius;
}

console.log(circleLength(5));
console.log(circleLength(10));