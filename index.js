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