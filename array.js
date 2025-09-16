//배열
const daysOfWeek = ["월요일","화요일","수요일","목요일","금요일","토요일","일요일"]
console.log("🚀 오늘의 운세:", daysOfWeek[0],"화이팅🔥");

const idol = ["장원영","안유진","리즈","레이","가을","이서"];
console.log("아이브의 최애: "+idol[1]+"❤️🧡💛💚💙");
console.log("아이브의 최애: "+idol[5]+"❤️🧡💛💚💙");
console.log(idol.length);
console.log("아이브의 최애: "+idol[idol.length -1]+"❤️🧡💛💚💙");

console.log("주령: 27, 혜정: 28 > but//장난을 너무 많이침 8살임 ! , 29, 30");

//객체(중괄호 사용): KEY-VALUE가 한쌍으로 구성된 정보들의 묶음. 
const person = {
  name: "송주령💛",
  isMale: false,
  mbti: "ISTJ❤️",
  age: 27+"💚"
}
console.log("🚀 ~ person:", person);

console.log("name:",person["name"]);
console.log("isMale:",person.isMale);
console.log("나이:",person.age);