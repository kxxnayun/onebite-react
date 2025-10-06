// math 모듈

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

// module.exports = {
//   add: add,
//   sub: sub, // 키 값만 써도 됨
// };

// export { add, sub };

export default function multiply(a, b) {
  return a * b;
}
