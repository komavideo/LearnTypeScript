function add(x:number, y:number) : number {
    return x + y;
}
console.log(add(10, 5));

function multiply(x:number, y:number) : number {
    return x * y;
}
console.log(multiply(10, 5));

let func_add = add;
let func_mul = multiply;

console.log(func_add(10, 50));
console.log(func_mul(10, 50));
