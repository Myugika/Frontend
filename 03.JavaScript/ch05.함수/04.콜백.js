function callFiveTimes(callback) {
    for (let i=0; i<5; i++) {
        callback();
    }
}

const cb = function() {
    console.log('함수가 호출됨.');
}

// cb();
// callFiveTimes(cb);


callFiveTimes(function() {
    console.log('함수가 호출됨.');
});

// 위와 아래가 같음

callFiveTimes(() => {
    console.log('함수가 호출됨.');
});