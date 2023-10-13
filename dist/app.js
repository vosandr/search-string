export default function (data, expr) {
    var start = data.indexOf(expr);
    var end = start + (expr.length - 1);
    return [start, end];
}
