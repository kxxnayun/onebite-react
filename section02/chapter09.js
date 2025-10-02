// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  { name: "김나윤", hobby: "baseball" },
  { name: "고길동", hobby: "baseball" },
  { name: "홍길동", hobby: "독서" },
];

const baseballPeople = arr1.filter((item) => item.hobby === "baseball");

console.log(baseballPeople);

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});

console.log(mapResult1);

let names = arr1.map((item) => item.name);
console.log(names);

// 4. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
arr3.sort();

console.log(arr3);

let arr4 = [10, 3, 4];

// 오름차순
arr4.sort((a, b) => {
  if (a > b) {
    // b가 a 앞
    return 1; // -> b, a 배치
  } else if (b > a) {
    // a가 b 앞
    return -1; // -> a, b 배치
  } else {
    // 자리 변경 X
    return 0; // -> a, b 자리 유지
  }
});
console.log(arr4);

// 내림차순
arr4.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (b > a) {
    return 1;
  } else {
    return 0;
  }
});
console.log(arr4);

// 4. toSorted (가장 최근에 추가된 최신 함수)
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(arr5);
console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["h1", "im", "nayun"];
const joined = arr6.join(" "); // 바꾸고 싶은 구분자 넣으면 바뀜
console.log(joined);
