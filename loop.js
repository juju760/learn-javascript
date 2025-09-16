const numbers = [27, 263, 3413, 954, 7865];
console.log("💜💜 ~ numbers:", numbers)

// for(let i=0; i<10; i++){
//   console.log(i+'번째 실행');
// }

// for(let i=0;i<10;i++){
//   // 반복해서 실행할 로직
//   console.log(`${i}번째 실행`);
// }

for(let i=0; i<numbers.length; i++){
  console.log(`💗💖 ${i}: ${numbers[i]}`);
}

//foreach,  향상된 for문 
numbers.forEach((value, index) => {
  console.log(`💝🖤 ${index}: ${value}`);
});

const ingredientList = ["🌿","🍅","🥓","🧀","🍤","🥚","🌽","🍋","🍒","🍍","🥝"];
let sandwitch = "🥯";

//각 재료들을 샌드위치에 추가 
ingredientList.forEach((item)=>{
  console.log("🚀 ~ item:", item)
  sandwitch += item;
  console.log("🚀 ~ sandwitch:", sandwitch)
})

console.log("🚀 ~ sandwitch:", 
  sandwitch);

//자주 사용하는 배열 함수 
const students = ["❤","🧡","💛","💚","💙","💜","🤎","🖤","🤍","song","park","son","kim"];
console.log("🚀 ~ students:", students)

//map: 기존 배열을 조작하여 새로운 배열을 리턴함.
//기존 배열에 영향이 없이 새 배열을 생성하는 것.  
const upperStudents = students.map((student)=>{
  return student.toUpperCase();
})
console.log("🚀 ~ upperStudents:", upperStudents)

const upperStudents2 = students.map((student)=>
  student.toUpperCase());
console.log("🚀 ~ upperStudents2:", upperStudents2)

//filter: 배열안의 요소들 중 조건을 만족하는 배열의 요소들로 새로운 배열을 리턴함. 
//글자수가 4글자 이상인 요소들만 필터링하고 싶다. 
//리턴: 조건식을 return 구문에 작성 
//조건에 부합하는 요소가 없는 경우 빈 배열 리턴 
const filterStudents = students.filter((student)=>student.length>=3);
console.log("🚀 ~ filterStudents:", filterStudents);

//find: 배열 안의 요소들 중 조건을 만족하는 "첫번째 요소를 리턴"
//리턴: 배열x, 요소를 반환 
//조건에 부합하지 않는 경우는? undefined 리턴 
const findStudents = students.find((student) => student.length >=7);
console.log("💤💦 ~ findStudents:", findStudents);

//some/every (boolean타입 리턴)
//some: 배열의 요소 중 하나라도 만족시 true 리턴 
//every: 배열의 요소가 모두 만족해야 true 리턴 
const someStudents = students.some((student)=>student.startsWith("s"));
console.log("🚀 ~ someStudents:", someStudents);

const everyStudents = students.every((student)=>student.startsWith("s"));
console.log("🚀 ~ everyStudents:", everyStudents);
