const array = [52, 273.1, '아침', '점심', true, false];
console.log(array[0], array[4]);
console.log(array.length, array[array.length-1]);
console.log(typeof array);

// Element 추가
// 자바의 push = 파이썬의 append
array[6] = 6;
array[array.length] = 7;
array.push('push');
console.log(array)
console.log(array.toString());

// 기본 for - loop
for (let i=0; i < array.length; i++) {
    console.log(i, array[i]);
}

// Enhanced for - loop
for (let item of array) {
    console.log(item);
}