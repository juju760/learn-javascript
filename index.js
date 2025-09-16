const username ="박혜죵"; //const = 상수. 변할 수 없는 값 
console.log("🚀 ~ username:", username)
console.log("🚀 ~ username:", username)
console.log("🚀 ~ username:", username);
let usermbti = "ESFJ"; //let = 변수. 변할 수 있는 값 
console.log("🚀 ~ usermbti:", usermbti);


console.log("USERNAME은? "+username);
console.log("MBTI는? "+usermbti);

usermbti = "ISTJ";
console.log("🚀 ~ usermbti:", usermbti);

// 상수는 변경 불가능 
// username = "송주령";
// console.log("🚀 ~ username:",username );

const num = 27;
console.log("🚀 ~ number:", num)
const str = "텍스트";
console.log("🚀 ~ string:", str)
const bool = true;
console.log("🚀 ~ bool:", bool)
const empty = undefined;
console.log("🚀 ~ empty:", empty)

console.log("num", typeof num);
console.log("str", typeof str);
console.log("bool", typeof bool);
console.log("empty", typeof empty);

/*
null과 undifined의 차이점 
null: 개발자가 의도를 가지고 값을 비움
undifined: 개발자 의도와 상관없이 값이 없는 상태 
*/

let emp;

// 함수

console.log("=-----------------------------------------");

// 함수 정의 / 선언
function greeting(){
  //실행할 로직 
  console.log("HI~♥");
  console.log("반갑습니다. " + username +"님♡");

  //백틱
  console.log(`반갑습니다 ${username} 당신의 MBTI는 ${usermbti}이시군요.`);
}

//function greeting2 // 기본구문 
// 아래는 화살표 함수 
const greeting2 = () => {
  //실행할 로직 
  console.log("HI~♥");
  console.log("반갑습니다. " + username +"님♡");

  //백틱
  console.log(`반갑습니다 ${username} 당신의 MBTI는 ${usermbti}이시군요.`);
}


// 함수 호출 / 실행 
greeting();
greeting2();

//함수의 인자와 매개변수 
//매개변수: 정의하는 부분에서
//인자: 호출하는 부분에서 
const sum = (num1, num2) => {
  //실행할 로직 
  const result = num1 + num2;
  console.log("🚀 ~ sum ~ result:", result)
  return result;

  console.log("return 끝!!!");
}

const add = sum(20,7);
console.log("🚀 ~ add:", add)


//미션: sayHello라는 함수 만들기
//사용자 이름을 받아서 반갑습니다 --- 님 
const sayHello = (uname) => {
  console.log("반갑습니다. "+uname +"님");
}

sayHello("인기스타 송상훈");

const double = (num) => {
  return num * 2
}

const doubleResult = double(add);
console.log("🚀 ~ doubleResult:", doubleResult)

console.log("=-----------------------------------------");

//조건문
if(sum(80,30) >= 60){
  console.log("합격")
} else {
  console.log("불합");
}

if(true){
  console.log("조건문 실행")
}

const score = 70;
if(score >= 80){
  console.log("하이하이");
}else {
  console.log("바이바이");
}

