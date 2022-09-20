let num1 = Math.ceil(Math.random() * 90 + 10);
let num2 = Math.ceil(Math.random() * 90 + 10);
if (num1 > num2) {
    little = num2;
} else little = num1;

let set1 = new Set();

for (let i=1; i <= little; i++) {
    if (num1%i === 0 && num2%i === 0) {
        set1.add(i);
    }
}
console.log(`랜덤으로 주어진 수 : ${num1}, ${num2}`);
console.log(`공약수 : ${Array.from(set1).join(',')}`);