// if (10 === 5) {
//   // a === b  ---> Is a equal to b ?, a = b ---> a is equal to b !
//   console.log("hi");
// } else if (10 === 10) {
//   console.log("good");
// } else {
//   console.log("bye");
// }

/*
if (10 < 5 || "sb" === "hs") {
  // && ---> and,  || ---> or
  console.log("yes");
} else {
  console.log("nope");
}
*/

const age = prompt("How old are you?");
console.log(age);

if (age >= 18 && age <= 21) {
  console.log("You can drink but you should not");
} else if (age > 21) {
  console.log("Go ahead");
} else {
  console.log("You cant.");
}
