var emptyArray = []

function doublePush(blah) {
  emptyArray.push(blah);
  emptyArray.push(blah);
}

doublePush("the eagle");

console.log(emptyArray);

doublePush("the eagle");

console.log(emptyArray)
