import searchString from './app'

let data = "ioyiotio";
let expr = "io"
let result = '';
let copiedRes = 0;
let index = data.indexOf(expr);
console.log(index);
let lastIndex = index + expr.length
console.log(lastIndex);

while (index != -1 && lastIndex != -1) {
  result = result + data.slice(index, copiedRes);
  console.log(result)
  index = data.indexOf(expr, index);
  console.log(index)
  lastIndex = data.lastIndexOf(expr, copiedRes);
  console.log(lastIndex)
  copiedRes += lastIndex;

}

console.log(result);