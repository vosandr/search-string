export default function (data: string, expr: string):Array<number> {
  let start = data.indexOf(expr);
  let end = start+(expr.length-1);
  return [start,end];
}