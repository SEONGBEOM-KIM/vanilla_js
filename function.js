/*
function sayHello(name, age){         //who <--- argument 인자
  console.log("Hello!", name, " You have", age, "years of age.");
}

sayHello("SB", 15);
*/

/*
function sayHello(name, age){
  return(`Hello ${name} you are ${age} years old.`);
}

const greetSB = sayHello("SB", 31)

console.log(greetSB)
*/

const calculator = {
  plus: function(a, b) {
    return a + b;
  },
  minus: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  devide: function(a, b) {
    return a / b;
  },
  power: function(a, b) {
    return a ** b;
  }
};

// calculator 라는 object를 만들어서 실행.

const plus = calculator.plus(3, 9);
console.log(plus);
const minus = calculator.minus(9, 3);
console.log(minus);
const multiply = calculator.multiply(9, 3);
console.log(multiply);
const devide = calculator.devide(9, 3);
console.log(devide);
const power = calculator.power(2, 3);
console.log(power);
