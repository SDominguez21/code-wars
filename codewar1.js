// function maxOfTwoNumbers(num1, num2){
//   if (num1 > num2){
//     return num1;
//   } else {
//     return num2;
//   }
// } 
// var words = [
//   'mystery',
//   'brother',
//   'aviator',
//   'crocodile',
//   'pearl',
//   'orchard',
//   'crackpot'
// ];

// function findLongestWord(arrayOfWords){
// let longestWord = "";
// arrayOfWords.forEach(curentWord => {
//   if(curentWord.length > longestWord.length){
//     longestWord = curentWord;
//   }
// })
// return longestWord;
// }
// console.log("result: ", findLongestWord(words));

// CALCULATING SUM

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumArray(arrNum) {
  return arrNum.reduce((accumulator, currentValue) => {
    // console.log(accumulator,"  " currentValue);
    return accumulator + currentValue;
  });
}
// console.log(sumArray(numbers));


// CALCULATING AVERAGE 
function averageNumbers(arrNums){
  return sumArray(arrNums)/arrNums.length;  
}

// console.log(averageNumbers(numbers));

var words = [
    'seat',
    'correspond',
    'linen',
    'motif',
    'hole',
    'smell',
    'smart',
    'chaos',
    'fuel',
    'palace'
];

function averageWordLength(arrOfWords){
// iterate through array 
  let wordSum = 0;
  arrOfWords.forEach(eachWord =>{
    wordSum += eachWord.length;
  });
  return wordSum / arrOfWords.length;
}

console.log(averageWordLength(words)); 