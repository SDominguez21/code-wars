// function someCallbackFunction() {
//   console.log("Hey there, Ironhackers!");
// }
// const timeoutId = setTimeout(someCallbackFunction, 5000);

let counter = 1;
const callbackFunction = function () {
  console.log(counter);
  setTimeout(callbackFunction, 1000);

  counter += 1;
}

let timeoutId = setTimeout(callbackFunction, 1000);

starter(){
  setInterval this.currentTime +1
}
let setInterval = this.intervalId 