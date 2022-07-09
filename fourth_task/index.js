/*Дан массив [[1,2], [1,2,3], [1,2,3,4]]. Найдите индекс массива, длина которого > 3. */

let arr = [[1,2], [1,2,3], [1,2,3,4]];

let result = arr.findIndex(el => el.length > 3);

console.log(result);