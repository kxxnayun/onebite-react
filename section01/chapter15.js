// 1. 객체 생성

let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  name: "김나윤",
  age: 22,
  hobby: "baseball",
  "like cat": true, // 띄어쓰기 있는 키 값은 "" 사용
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
console.log(name);

let age = person["age"]; // ""로 문자열로 써야함
console.log(age);

// 존재하지 않는 프로퍼티는 undefined

let property = "hobby";
let hobby = person[property];
console.log(hobby);

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "student";
person["favorite food"] = "떡볶이";

console.log(person);

// 3.3 프로퍼티를 수정하는 방법
person.job = "educator";
person["favorite food"] = "치킨";

console.log(person);

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favorite food"];
console.log(person);

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result1);
console.log(result2);
