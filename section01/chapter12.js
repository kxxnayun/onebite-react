// 1. 함수 표현식
function funcA() {
  console.log("funcA");
}

let varA = funcA;
console.log(varA);
varA();

let varB = function () {
  // 익명함수 -> 호이스팅 안 됨
  console.log("funcB");
};

varB();

// 2. 화살표 함수
let varC = () => {
  return 1;
};
console.log(varC());

let varD = () => 1;
console.log(varD());

let varE = (value) => value + 1;
console.log(varC(10));

let varF = (value) => {
  console.log(value);
  return value + 1;
};
console.log(varF(10));
