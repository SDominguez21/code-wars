// kata 1 
// take a string of numbers and return it as a reversed array
/*
function digitize(n) {
 arr = n.toString().split("").map(function(t){return parseInt(t)})
 arr.reverse();
 return arr
}

console.log(digitize('123456789'))
*/
// kata 2 (gg ez)
// This function is not operating properly and pushing an error, fix it.
/*
function multiply(a, b){
  return a * b;
};

console.log(multiply(3,6));

*/




// kata 3
// write a function that removes all the white space from a string.
/*
function noSpace(x){
  x = x.split(' ').join('')
  return x;
};

console.log(noSpace('tt otototot oooo 99 '));
*/

// kata 4
// Return a string with double characters (unfinished);
/*
function doubleChar(str) {
  
  
  let merp = str.repeat(2);

  let arr = merp.split('');
   for(let i = 0; i <arr.length; i++){
    if (arr.length >= str.length){
      arr.push(arr.splice(0, arr.length))
    }
   }
   
  console.log(arr)
 
  return arr.join();
}
*/
/*

function doubleChar(str){
  for (let i = 0; i <= str.length; i++){
    if(i < str.length+1) {
      str[i].repeat(2);
    }
  }
  return str
}
*/
// 

// console.log(doubleChar('this'));

// Changing a boolean to a word
/*
function boolToWord(bool){
  if (bool){
     return ('Yes')
  } else{
     return 'No'
  }
}

console.log(boolToWord(false))
*/

/*

// Finding the average/grade

function getAverage(arr,marks){
  var accumulator = 0;
  
  for(var i = 0; i < arr.length; i++){

  accumulator += arr[i]


}

return Math.floor(accumulator/arr.length);

}
*/


// Beast dinner function 
/*
function feast(beast, dish){

    function guestFunction(beast){
  for (let i = 0; i <= beast.length; i++){
    let beastFirst = beast.slice(0,1);
    let beastSecond = beast.slice(beast.length-1);
    let beastTogether = beastFirst + beastSecond;
    return beastTogether;
  }
    }
   function dinnerFunction(dish){ 
  for(let i = 0; i <= dish.length; i++){
    let dishFirst = dish.slice(0,1);
    let dishSecond = dish.slice(dish.length-1);
    let dishTogether  = dishFirst + dishSecond;
    return dishTogether;
  }
   }
   return (guestFunction(beast) === dinnerFunction(dish));
}


console.log(feast("birdman", "chocolate cake"));
*/

// RPS KATA
/*
const rps = (p1,p2) => {
  if(p1 === 'scissors' && p2 === 'rock'){
    return 'Player 2 won!'
  } else if (p1 === 'scissors' && p2 === 'paper') {
    return 'Player 1 won!'
  }
  if(p1 === 'rock' && p2 === 'scissors'){
    return 'Player 1 won!'
  } else if (p1 === 'rock' && p2 === 'paper'){
    return 'Player 2 won!'
  }
  if (p1 === 'paper' && p2 === 'rock'){
    return 'Player 1 won!'
  } else if (p1 === 'paper' && p2 === 'scissors'){
    return 'Player 2 won!'
  }
  if (p1 === p2){
    return 'Draw!'
  }

}

console.log(rps('rock','paper'));
*/



/*
const litres = (time) => {
  water = Math.floor(0.5 * time)
  return water; 
}

console.log(litres(11.8))
*/

/*
const finalGrade = (exam, projects) => {
  if (exam >= 90 && exam <=100){
    return 100;
} else if (projects >10) {
  return 100;
}
  if (exam >= 75 && exam <= 100 && projects >= 5 && projects <= 10){
    return 90;
  }
  if (exam >=50 && exam <= 100 && projects >=2 && projects <= 5){
    return 75;
  }
return 0;
  
}


console.log(finalGrade(50,2))
*/

/*
 const hoopCount = (n) => {
   if (n >= 10){
     return 'Great, now move on to new tricks.'
   } else {
     return 'Keep at it until you get it.'
   }
 }
*/

// alt solution
/*
const hoopCount = (n) => {
  return (n<10) ? 'Keep at it until you get it' : 'Great, now move on to tricks'
}

const even_or_odd = (num) => {
  if (num%2 === 0){
    return 'Even';
  } else {
    return 'Odd';
  };

};

console.log(even_or_odd(191))

*/

/*

const positiveSum = (arr) => {
  acc = 0;
  for (i=0;i<=arr.length;i++){
    if(arr[i] > 0){
      acc += arr[i];
    }
  }
return acc;
}

positiveSum([-1,-2,-3,1,2,3]);

*/

/*

const toAlternatingCase = (str) => {
  let acc = '';
  for(i=0;i<str.length;i++){
    if(str[i] >= 5 && str[i] <= 8 && str[i] >=4){
      acc += str[i].toUpperCase();

      
    }
  }
  return acc
}

console.log(toAlternatingCase('Encyclopedia'));

*/
/*
String.prototype.toAlternatingCase = function(){
  let acc = '';
  for(let i=0;i<this.length; i++){
    if (this[i] === this[i].toLowerCase()){
      acc += this[i].toUpperCase();
    }else if(this[i] === this[i].toUpperCase()){
      acc += this[i].toLowerCase();
    }else{
      acc += this[i];
    }
  }
  return acc;
}
*/


// context --- a group of information/number of properties/that this has access to. 
/*
const smallInt = (arr) => {
 return Math.min.apply(null,arr);
}
*/

Array.prototype.smallestInteger = smallInt = (arr) => {
    return Math.min.apply(null,arr);
   }
   
   console.log(smallInt([2,5,0,-2,-1]))
   
   Array.prototype.smallestInteger([2,5,0,-2,-1])
   
   
  