// //Find the odd Integer , there will always be one element that appears an odd number of times

const findOdd = (arr) => {
  
    let myObj = arr.reduce(function (accum, curr) {
      
      if(accum[curr]) {
        accum[curr] ++;
      } else {
        accum[curr] = 1;
      }
      return accum;
    }, {});
    
    //console.log(myObj);
    
    for(var key in myObj) {
      
      if(myObj[key] % 2 !== 0) {
        return Number(key);
      }
      
    }
    
  }
  
  findOdd([2, 2, 3, 3, 4, 4, 5, 5, 1, 1, 3, 4, 3, 4, 4]);
  
  const vowelCount = (str) => {
    
    str = str.toLowerCase();
    
    let vowels = 'aeiou';
    
    let count = 0;
    
    for(let i = 0; i < str.length; i++) {
      
      if(vowels.indexOf(str[i]) >= 0) {
        count ++;
      }
      
    }
    return count;
  }
  
  vowelCount('hello');
  
  // If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
  
  // Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
  
  // Note: If the number is a multiple of both 3 and 5, only count it once.
  
  
  const multiples3and5 = (num) => {
    
    let sum = 0;
    
    for(let i = 3; i < num; i++) {
    
      if(i % 3 === 0 || i % 5 === 0) {
      
        sum += i;
      
      }
      
    }
    return sum;
  }
  
  multiples3and5(10);
  
  // In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
  
  // Example:
  
  const highAndLow = (str) => {
    
    let arr = str.split(' ').map(Number);
    
    let min = arr[0];
    let max = arr[0];
    
    arr.forEach((elem) => {
      
      if(elem > max) {
        max = elem;
      }
      
      if(elem < min) {
        min = elem;
      }
      
    });
    return max + ' ' + min;
    
  }
  
  // highAndLow("1 2 3 4 5"); // return "5 1"
  // highAndLow("1 2 -3 4 5"); // return "5 -3"
  // highAndLow("1 9 3 4 -5"); // return "9 -5"
  
  // Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word.
  
  // Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
  
  // Example:
  
  // Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
  // Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
  
  const jadenCase = (str) => {
    
    str = str.toLowerCase();
    
    let arr = str.split(' ');
    
    let newArr = [];
    
    arr.forEach((element) => {
      newArr.push(element[0].toUpperCase() + element.slice(1));
    })
    return newArr.join(' ');
  }
  
  // jadenCase('How can mirrors be real if our eyes arent real');
  
  // Some numbers have funny properties. For example:
  
  // 89 --> 8¹ + 9² = 89 * 1
  
  // 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
  
  // 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
  // Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n. In other words:
  
  // Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
  // If it is the case we will return k, if not return -1.
  
  // Note: n, p will always be given as strictly positive integers.
  
  
  
  const digPow = (n, p) => {
  
    num = n.toString();
    
    let sum = 0;
    
    for(let i = p, j = 0; i < p + num.length; i++, j++) {
      sum += Math.pow(num[j], i);
    }
    
    let k = sum/n;
    
    return k % 1 === 0 ? k : -1;
    
  }
  
  // digPow(89, 1) //should return 1 since 8¹ + 9² = 89 = 89 * 1
  // digPow(92, 1) //should return -1 since there is no k such as 9¹ + 2² = 13 => equals 92 * k
  // digPow(695, 2) //should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
  // digPow(46288, 3) //should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
  
  // Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
  
  const persistence = (num) => {
    
    num = num.toString();
    
    let count = 0;
    
    while(num.length > 1) {
      
      num = multiplyDigs(num);
      count ++;
      
    }
    return count;
  }
  
  const multiplyDigs = (n) => {
    
    n = n.split('');
    return n.reduce((a, b) => a*b).toString();
    
  }
  
  
  persistence(39) //=== 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                         // and 4 has only one digit
  
  persistence(999) //=== 4 // because 9*9*9 = 729, 7*2*9 = 126,
                          // 1*2*6 = 12, and finally 1*2 = 2
  
  persistence(4) //=== 0 // because 4 is already a one-digit number
  
  // Let's say you are given the array {1,2,3,4,3,2,1}:
  // Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.
  
  const equalSides = (arr) => {
    
    for(let i = 0; i < arr.length; i++) {
      
      let leftSide = arr.slice(0, i);
      let rightside = arr.slice(i + 1);
      
      if(sumArrHelper(leftSide) === sumArrHelper(rightside)) {
        return i;
      }
      
    }
    return -1;
  }
  
  const sumArrHelper = (arr) => {
    
    if(!arr.length) { return 0; }
    
    return arr.reduce((a, b) => a + b);
    
  }
  
  console.log(equalSides([1, 2, 3, 4, 3, 2, 1])); // 3
  
  console.log(equalSides([1,100,50,-51,1,1])); // 1
   
  console.log(equalSides([20,10,-80,10,10,15,35])); // 0
  
  
  const compDNA = (str) => {
    
    let retStr = '';
    
    for(let i = 0; i < str.length; i++) {
      
      switch (str[i]) {
        
        case 'A':
          retStr += 'T';
          break;
          
        case 'T':
          retStr += 'A';
          break;
          
        case 'G':
          retStr += 'C';
          break;
          
        case 'C':
          retStr += 'G';
          break;
        
      }
      
    }
    return retStr;
  }
  
  console.log(compDNA('ATTGC'));
  console.log(compDNA('GTAT'));
  
  
  
  
  
  
  
  
  
  
  
  
  