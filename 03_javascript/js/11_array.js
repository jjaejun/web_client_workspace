/**
 * Array
 * - js배열은 타입지정이 없고, 크기도 제한이 없다.
 * - java의 ArrayList<Object>와 비슷
 */
function test1() {
    const arr1 = [1, 2, 3]; // 리터럴로 생성
    const arr2 = new Array(1, 2, 3); // new 연산자로 생성

    console.log(arr1);
    console.log(arr2);
    console.log(arr1 == arr2); // false

    // 존재하지 않는 요소 참조 시 오류가 뜨지 않음(indefined를 반환)
    console.log(arr1[0], arr1[1], arr2[2], arr1[3]);
    // .abcdef(); 요소를 참조할 시 오류가 뜸
    // arr1[100].abcdef(); // 11_array.js:16 Uncaught TypeError: Cannot read properties of undefined (reading 'abcdef')

    arr1[0] *= 100;
    arr1[1] *= 100;
    arr1[2] *= 100;
    console.log(arr1);

    const student = ['홍길동', [100, 90, 50], [90, 80, 90]];
    console.log((student[1][0] + student[2][0]) / 2);
}

/**
 * 반복문
 * - for
 * - for in문 : 각 속성명(index)을 매턴에 반환
 * - for of문 : 각 속성값을 매턴에 반환
 */
function test2() {
    const arr = ['a', 'b', 'c', 'd', 'e'];

    // for..in문
    for(const index in arr) {
        console.log(index, arr[index]);
    }

    // for..of문
    for(const value of arr) {
        console.log(value);
    }
}

/**
 * 전개연산자 Spread Operator
 */
function test3() {
    const arr = [1, 2, 3];
    const arr2 = ['가', '나', '다'];
    const arr3 = [...arr, ...arr2];
    console.log(arr3);
}

/**
 * 유사배열
 * - Array객체를 상속하지 않은 배열 모양만 흉내낸 객체 (index, length 속성만 있음)
 * - Array객체가 제공하는 다른 메소드 사용불가
 * - getElementsByTagName, getElementsByClassName, getElementsByName, querySelectorAll
 */
function test4() {
    const arr = [1, 2, 3];
    console.log(arr);
    const buttons = document.getElementsByTagName("button");
    console.log(buttons);

    // arr.map((n) => console.log(n));
    arr.map(function (n) { console.log(n); }); 
    // buttons.map(function (n) { console.log(n); }); // Uncaught TypeError: buttons.map is not a function

    // 진짜배열로 변환하기
    // 1. 전개연산자
    console.log([...buttons]);
    [...buttons].map(function(b) { console.log(b); });
    // 2. Array.from
    Array.from(buttons).map(function(b) { console.log(b); });
}

/**
 * - indexOf
 * - lastIndexOf
 * - find
 * - findIndex
 * - concat
 * - join
 * - reverse
 * - sort
 */
function test5() {
    // indexOf 해당 요소의 인덱스를 반환. 존재하지 않으면 -1 반환
    const arr = ['사과', '딸기', '귤', '멜론', '사과', '아보카도'];
    console.log(arr.indexOf('멜론')); // 3
    console.log(arr.indexOf('바나나')); // -1
    console.log(arr.indexOf('사과')); // 0
    console.log(arr.lastIndexOf('사과')); // 4

    // find : 조건에 만족하는 최초의 요소를 반환
    console.log(arr.find(function(fruit) {
        // return fruit === '귤';
        // return fruit.length === 4;
        return fruit.startsWith('딸'); // 딸기
    }));

    // findIndex : 조건에 만족하는 최초 요소의 인덱스를 반환
    console.log(arr.findIndex(function(fruit) {
        // return fruit === '귤';
        // return fruit.length === 4;
        return fruit.startsWith('딸'); // 1
    }));

    // concat 두 배열 연결 (immutable, 원본 배열을 바꾸지 않는다)
    const vegitables = ['고구마', '감자', '오이'];
    const vegifruits = arr.concat(vegitables);

    console.log(arr);
    console.log(vegitables);
    console.log(vegifruits);

    // join
    console.log(vegitables.join('/'));

    // reverse (mutable, 원본 배열을 직접 바꿈)
    console.log(vegitables.reverse());
    console.log(vegitables);

    // sort : 오름차순 정렬 (mutable, 원본 배열을 직접 바꿈)
    const nums = [3, 2, 1, 5, 4];
    console.log(nums.sort());
    console.log(nums);

    const names = ["홍길동", "고길동", "박길동"];
    console.log(names.sort());
    console.log(names);

    // 내림차순 정렬(커스텀 정렬) - 정렬기준함수 전달
    console.log(nums.sort(function(a, b){
        return b - a;
    }));

    console.log('홍길동' - '고길동'); // NaN
    console.log('홍길동' > '고길동'); // true
    console.log(names.sort(function(a, b){
        if (a > b) return 1; // 자리교환
        if (b < a) return -1;
        return 0;
    }));
}

/**
 * - push | pop | unshift | shift
 * - slice
 * - splice
 */
function test6() { // (mutable)
    // push 마지막에 요소 추가
    // pop 마지막 요소 제거(반환)
    // unshift 0번지에 요소 추가
    // shift 0번지에 요소 제거(반환)
    const arr = ['강남', '역삼', '선릉'];
    arr.push('삼성');
    console.log(arr.pop());

    arr.unshift('교대');
    console.log(arr.shift());

    arr.push(arr.shift());
    console.log(arr);

    // slice(start, end) : (immutable)
    const langs = ['html', 'css', 'javascript', 'typescript', 'java'];
    console.log(langs.slice(2, 4)); // ['javascript', 'typescript']
    console.log(langs.slice(3)); // ['typescript', 'java']
    console.log(langs.slice()); // 전체 복제

    // splice(start, delCnt, newItem1, newItem2, ...) (mutable)
    // start부터 delCnt개를 삭제하고, 새요소를 추가. 삭제된 요소가 배열로 반환
    const alpha = ['a', 'b', 'c', 'd', 'e'];
    console.log(alpha.splice(1, 1, 'x', 'y')); 
    console.log(alpha); // ['a', 'x', 'y', 'c', 'd', 'e']
    console.log(alpha.splice(1, 0, 'k', 'l', 'm'));
    console.log(alpha); // ['a', 'k', 'l', 'm', 'x', 'y', 'c', 'd', 'e']

    // toString
    console.log(alpha.toString()); // a,k,l,m,x,y,c,d,e
}