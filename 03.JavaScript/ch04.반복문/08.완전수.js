for (let i=2; i <= 10000; i++) {
    let yaksu = 0;
    for (let k=1; k<=i-1; k++) {
        if (i%k == 0) {
            yaksu += k;
        }
    }
    if (i == yaksu) {
        console.log(i);
    }
}
