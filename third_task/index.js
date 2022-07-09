/*
- 1. Дан массив `['js', 'css', 'html']`. Выведите на экран первый элемент.
- 2. Отфильтруйте массив `[0, 1, false, 2, undefined, '', 3, null]` от нежелательных значений, таких как false, undefined, пустые строки, ноль, null с помощью метода `filter`.  Ожидаемый результат: `[1, 2, 3]`. */

// 1 задание
let arr = ['js', 'css', 'html'];

console.log(arr[0]);

// 2 задание

let elements = [0, 1, false, 2, undefined, '', 3, null];
let elementsFiltered = elements.filter(el => el !== false && el !== undefined && el !== '' && el !== null && el !== 0);

console.log(elementsFiltered);

