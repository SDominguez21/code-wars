// FIND THE MISSING LETTER
//#Find the missing letter
//Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
//You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
//The array will always contain letters in only one case.
//Example:
//['a','b','c','d','f'] -> 'e'
//['O','Q','R','S'] -> 'P'
//(Use the English alphabet with 26 letters!)

// first make function findmissing array
//make variable string--full alphabet 
//make second variable that takes the string and makess it an array with ("") in between 
//then make a loop that involves the length of that variable


function findMissingLetter(arr) {
    var str = "abcdefghijklmnopqrstuvwxyz";
    var str2arr = arr.join("");
    for (var i = 0; i < str2arr.length; i++) {
      if (str2arr.charCodeAt(i + 1) - str2arr.charCodeAt(i) != 1) {
        return String.fromCharCode(str2arr.charCodeAt(i) + 1);
      }
    }  
  }  
  findMissingLetter(["a","b","c","d","f"]);
  findMissingLetter(['O','Q','R','S']);
  
  