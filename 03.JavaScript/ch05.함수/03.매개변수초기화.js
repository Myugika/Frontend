// 매개변수가 지정되지 않은 경우 대처방법

function print(name, count) {
    /* if (!count)
        count = 0; */
    // count = count ? count : 0
    count = count || 0;
    console.log(`${name}이/가 ${count}개 있습니다.`);
}

print('사과', 5);
print('감')