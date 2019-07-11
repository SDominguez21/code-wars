// function lastDigit(num1, num2){
//   num1 = num1.toString();
//   num2 = num2.toString();
//   if(num1[num1.length-1] === num2[num2.length-1]){
//     return true;
//   } else{
//     return false;
//   }
// }
// lastDigit(22,301);


// function stringToNumber(str){
//   var num = parseInt(str);
//   return num;
// }
// var stringToNumber = function(str){
//   return +str;
// }
// var stringToNumber = function(str){
//   return Number(str);
// }

// function stringToNumber(str){
//   return Number(str);
// }


// stringToNumber('23')


// function reverse(string){
// str = string.split(" ").reverse().join(" ");
// return str;
// }


// reverse("Hello Mt");


// function maps(x){
//   return x.map(n => n * 2);
// }
// maps([1,2,3]);


// function noSpace(str){
// var emptyString = '';
//   for(i = 0; i < str.length; i++){
//     if(str[i] !== ' '){
    
//       emptyString += str[i];
//     }
//       }
   
//   return emptyString;
// }


// function litres(time) {
//   var water = (time * 0.5);
// return Math.floor(water);
// }
// litres(12.3);


// function countPositivesSumNegatives(input) {
//   if (!input || input.length === 0) return [];
//   var count = 0;
//   var sum = 0;
  
//     input.forEach(function(i){ 
//     if (i > 0){
//       count++;
//         } else {
//         sum += i;
//         }
//     });
//   return [count, sum];
// }

// countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);


// function fakeBin(x){
//   let result = '';
//   for(let i = 0; i < x.length; i++){
//     x[i] < 5 ? result += 0 : result += 1;
//   }
//   return result;
// }



// function fakeBin(x){
//   var emptyString = '';
//   for(var i = 0; i < x.length; i++){
//     if(x[i] > 5){
//       emptyString += '1';
//     } else {
//       emptyString += '0';
//     }
//   }
//   return emptyString;
// }



// function fakeBin(x){
//   var newBin = x.split('');
//   for (var i = 0; i < newBin.length; i++) {
//       if (Number(newBin[i]) < 5) {
//           newBin[i] = 0;
//       } else if(Number(newBin[i]) >= 5) {
//       newBin[i] = 1;
//     }
//     }
//   newBin = newBin.join('');
//   return newBin;
// }

// fakeBin('4934210');



// function countSheeps(arrayOfSheep) {
//   var count = 0;
//   for(var i = 0; i < arrayOfSheep.length; i++){
//     if(arrayOfSheep[i] === true){
//     count++;
//   }
  
//   }
//   return count;
// }





              
              
              



countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]);
    
    function countSheeps (arrayOfSheep) {
      var sheepCounter = 0;
      for( var i = 0; i < arrayOfSheep.length; i++) {
        if(arrayOfSheep[i]=== true) {
          sheepCounter++;
        }
      }
      return sheepCounter;
    }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  