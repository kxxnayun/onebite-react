// 1. Spread 연산자
// -> Spread: 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러 개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2);

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};
console.log(obj2);

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

funcA(...arr1);

// 2. Rest 매개 변수
// -> Rest는 나머지, 나머지 매개변수

function funcB(one, two, ...rest) {
  // rest 매개변수 뒤에 변수 선언 불가
  console.log(rest);
}

funcB(...arr1);

// 앙딱정
const animals = ["cat", "dog", "bird"];
console.log(...animals);
// 배열 안의 값을 하나씩 꺼내서 전달

function introduce(...names) {
  console.log(names);
}

introduce("Tom", "Jerry", "Mickey");
// 전달받은 값들을 하나의 배열로 묶는 것
