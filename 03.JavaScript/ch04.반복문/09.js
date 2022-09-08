let input = 7

for (let i=1; i <=(input+1)/2; i++) {
    let stars = '';
    for (let k=1; k <=(input+1)/2-i; k++)
        stars += ' ';
    for (let k=1; k<=(2*(i-1)+1); k++)
        stars += '*';
    for (let k=1; k <=(input+1)/2-i; k++)
        stars += ' ';
    console.log(stars);
}