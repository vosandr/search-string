export default function (data: string, expr: string) {
  let result = '';
  let index = data.indexOf(expr);
  let lastIndex = data.lastIndexOf(expr);

  while (index!=-1&&lastIndex!=-1){
    result += data.slice(index, lastIndex);
    index = data.indexOf(expr, index+1);
    lastIndex = data.lastIndexOf(expr, lastIndex+1);
  }
}

