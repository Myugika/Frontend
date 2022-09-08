// 10보다 큰 정수를 입력받아 약수를 모두 배열로 만들어서 출력

let input = 12;
let yaksu = []
for (let i=1; i <= input; i++) {
    if (input%i == 0) {
        yaksu.push(i);
    }
}

console.log(yaksu);