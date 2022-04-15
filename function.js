function reusableFunction() {
  console.log("Hi World");
  }
reusableFunction();

function functionWithArgs(param1, param2) {
  console.log(param1 + param2);
}
functionWithArgs (1,2);//3

function timesFive(num) {
  return num * 5;
}
const answer = timesFive(5);//25

// Setup
let sum = 0;
function addThree() {
  sum = sum + 3;
}
// Only change code below this line
function addFive() {
  sum = sum + 5;
}
// Only change code above this line
addThree();//3
addFive();//5
//8