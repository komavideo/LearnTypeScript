function add(x, y) {
    return x + y;
}
console.log(add(10, 5));
function multiply(x, y) {
    return x * y;
}
console.log(multiply(10, 5));
var func_add = add;
var func_mul = multiply;
console.log(func_add(10, 50));
console.log(func_mul(10, 50));
