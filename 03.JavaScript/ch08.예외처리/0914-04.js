let cars = ['buick skylark 320', 'plymouth satellite', 'amc rebel sst', 'ford torino'];
let manu = [];
let model = [];

for (let i of cars) {
    aa = i.split(' ');
    manu.push(aa[0]);
    if (aa.slice(1).length == 2) {
        bb = aa[1] + ' ' + aa[2];
        model.push(bb);
    } else {model.push(aa[1])};
}

console.log(`제조사 : ${manu.toString()}`);
console.log(`모델 : ${model.toString()}`);
