// Напишите функцию, которая генерирует случайное число с плавающей точкой в заданном диапазоне, используя методы объекта Math.

const randomFloat = (min, max) => {
    return Math.random() * (max - min) + min;
}

console.log(randomFloat(1, 10));
console.log(randomFloat(10, 20));