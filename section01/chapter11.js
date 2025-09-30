// 함수

function greeting() {
  console.log("안녕하세요");
}

console.log("호출 전");
greeting();
console.log("호출 후");

function getArea(width, height) {
  // width, height: 매개변수

  function another() {
    // 중첩 함수
    console.log("another");
  }
  another();

  let area = width * height;

  return area; // 반환값
}

let area1 = getArea(10, 20); // 10, 20: 인수
console.log(area1);
let area2 = getArea(20, 30);
console.log(area2);

// 함수의 호출보다 아래에 둬도 상관 없음
// 호이스팅 -> 끌어올리다
// 함수의 호출보다 아래에 있을 경우에 최상단으로 끌어올려서 실행 시킴
