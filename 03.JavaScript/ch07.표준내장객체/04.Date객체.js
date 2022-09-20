let today = new Date();
console.log(today.toDateString());
console.log(today.toLocaleString());

function myLocalTimeFormat(date) {
    year = String(date.getFullYear()).substring(2);
    month = String(date.getMonth()+1);
    //month = month.length == 1 ? '0' + month : month;
    day = `${date.getDate() < 10 ? '0'+date.getDate() : date.getDate()}`;
    hour = `${date.getHours() < 10 ? '0'+date.getHours() : date.getHours()}`;
    minute = `${date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()}`;
    sec = `${date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds()}`;
    return `${year}-${month}-${day} ${hour}:${minute}:${sec}`;
}

console.log(myLocalTimeFormat(today));

// UnixTime
const unixDate = new Date(1.66e12);
console.log(unixDate.toLocaleDateString());

// 문자열로 생성
const strDate = new Date('2022-09-14 09::32');
console.log(myLocalTimeFormat(strDate));

// 시간 요소로 생성
const elementDate = new Date(2022, 9-1, 14, 9, 50);
console.log(myLocalTimeFormat(elementDate));

// 시간 더하고 빼기
today.setDate(today.getDate() + 100);
console.log(myLocalTimeFormat(today));

// 시간 간격
const examDay = new Date('2022-11-17');
today = new Date('2022-09-14');
const diff = examDay.getTime() - today.getTime();
const dDay = diff / (24 * 60 * 60 * 1000);
console.log(`수능 D-${dDay}`)