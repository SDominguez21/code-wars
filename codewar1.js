
var i = 20;

while (i>0){
  console.log(i)
  i--
}

console.log("-----------");

var twoDArray = [];

for(let i=0; i < 10; i++){
  twoDArray.push([i])
  for(let j=1; j<10; j++){
    
    twoDArray[i].push(j)
  }
}

console.log("-----------")


for(let i=5; i <= 25; i++) {
  console.log(i)

  if(i ===15){
    break;
  } else{
    console.log(i)
  }
}

