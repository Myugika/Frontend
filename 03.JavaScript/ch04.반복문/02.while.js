let number= 1, sum = 0;

while (true) {
    sum += number
    if (sum > 1000)
        break;
    number++;
}

console.log(sum, number);


sum = 0;
for (let i=1; i < 1000; 1++) {              // 변수 i는 { } 안에서만 유효함(scope rule)
    sum += i;
    if (sum > 1000)
        break;
}