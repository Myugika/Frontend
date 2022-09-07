const currentTime = new Date();

if (currentTime.getHours() < 12) {          // 조건문의 중괄호는 문장이 여러개일 때 반드시 사용
    console.log(`${currentTime.toLocaleString()}, 오전입니다.`)
} else {
    console.log(`${currentTime.toLocaleString()}, 오후입니다.`)
};

// 조건 연산자, 3항 연산자
const amPm = currentTime.getHours() < 12 ? '오전' : '오후';
console.log(`${currentTime.toLocaleString()}, ${amPm}입니다.\n`);

// (파이썬)a = 값1 if 조건 else 값2 --> (JS)a = 조건 ? 값1 : 값2


const num = Math.ceil(Math.random() * 100);
if (num % 3 === 0 && num % 5 === 0) {
    console.log(num, 'FizzBuzz')
} else if (num % 3 === 0) {
    console.log(num, 'Fizz')
} else if (num % 5 === 0) {
    console.log(num, 'Buzz')
} else {
    console.log(num, num)
};