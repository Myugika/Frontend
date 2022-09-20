const text = `the grown-ups' response, this time, was to advise me to lay aside my drawings of boa constrictors, 
whether from the inside or the outside, and devote myself instead to geography, history, arithmetic, 
and grammar. That is why, at the, age of six, I gave up what might have been a magnificent career 
as a painter. I had been disheartened by the failure of my Drawing Number One and my Drawing Number Two. 
Grown-ups never understand anything by themselves, and it is tiresome for children to be always and 
forever explaining things to the.`;

let text2 = text.replace(/[\{\}\[\]\/?.,;:|\)*~`'.,!^\-_+<>@\#$%&\\\=\(\'\"]/g, '');
let textsp = text2.split(' ');


let count = 0;
for (let i of textsp) {
    if (i === 'the') {
        count += 1;
    }
}

console.log(`문장에 포함된 'the'의 갯수 : ${count}`);