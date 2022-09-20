function print() {
    let num1 = Math.ceil(Math.random() * 20 + 1);
    let array = [];
    while (true) {
        let num2 = Math.ceil(Math.random() * 20 + 10);
        if (num2 >= num1 + 4) {
            for (let i=num1; i <= num2; i++) {
                array.push(i)}
            break;
        }
    }
    array.splice(1,1);
    array.splice(array.length-2,1);
    for (let k of array) {
        console.log(`2의 ${k}제곱 : ${2**k}`);
    }
}

print();