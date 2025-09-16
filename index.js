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
console.log("if문 종료");

let grade = ""
if(score >= 90){
  grade = "A등급";
}else if(score >= 80) {
  grade = "B등급";
}else if(score >= 70){
  grade = "C등급";
}else {
  grade = "D등급";
}
console.log("🚀 ~ grade:", grade)

console.log("🔥🔥🔥 퀴즈 🔥🔥🔥");

// 여기에 orderSandwich 함수를 작성하세요
// orderSandwich 함수는 type 매개변수를 받고 타입에 따라 다른 재료를 반환해야 합니다
const orderSandwich = (type = 'basic') => {
    console.log("🚀 ~ orderSandwich ~ type:", type)
    return type == 'vegan' ? "🥖 + 🥬 + 🍅 + 🥑 + 🥒" : "🥖 + 🥬 + 🍅 + 🧀 + 🥓";
}

// 함수 테스트 - 아래 코드는 수정하지 마세요
console.log("기본 샌드위치 주문: " + orderSandwich());
console.log("기본 샌드위치 주문: " + orderSandwich('basic'));
console.log("비건 샌드위치 주문: " + orderSandwich('vegan'));

/* 예상 결과:
기본 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🧀 + 🥓
기본 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🧀 + 🥓
비건 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🥑 + 🥒
*/

//미션: age의 값이 18세 이상이면 성인이라는 스트링 할당
const age = 27;
const adultType = age >= 18 ? "성인" : "미성년자";
console.log(age+ "살=> " +adultType+"🔥");

if(""){
  console.log("True입니다");
}else{
  console.log("False입니다");
}

// const userInput = "";
// if(userInput){
//   alert("입력해주셔서 감사합니다.");
// }else{
//   alert("입력값을 작성해주세요");
// }

// const daysOfWeek = ["월요일","화요일","수요일","목요일","금요일","토요일","일요일"]
// console.log("🚀 오늘의 운세:", daysOfWeek[0],"화이팅🔥");

// const idol = ["장원영","안유진","리즈","레이","가을","이서"];
// console.log("아이브의 최애: "+idol[1]+"❤️🧡💛💚💙");
// console.log("아이브의 최애: "+idol[5]+"❤️🧡💛💚💙");
// console.log(idol.length);
// console.log("아이브의 최애: "+idol[idol.length -1]+"❤️🧡💛💚💙");

// console.log("주령: 27, 혜정: 28 > but//장난을 너무 많이침 8살임 ! , 29, 30");