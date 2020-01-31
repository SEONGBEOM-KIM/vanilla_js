const sbInfo = {
  name: "SB",
  age: 28,
  gender: "Male",
  isHandsome: true,
  favMovies: ["Along the gods", "LOTR", "Old boy"],
  favFoods: [
    { name: "Pizza", fatty: true },
    { name: "Salad", fatty: false }
  ]
};

console.log(sbInfo.favFoods[0].fatty);

//변수와 변수 연결할 때는 . 으로!! sbInfo.favFoods[0].fatty

console.log(sbInfo.gender);

sbInfo.gender = "Female";

console.log(sbInfo.gender);
//cosnt 일 때 sbInfo 자체는 바꿀수 없지만 object 내 요소는 바꿀 수 있음.

//name, age, gender, inHandsome 은 변수이기 때문에 "" text로 처리하지 않음

//object.veriable <--특졍 값만 출력
//object[num] <--특정 번째 값 출력
