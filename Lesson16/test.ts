// 参数可变长函数定义
function add2(...vals: number[]): number {
    let result = 0;
    for (let val of vals) {
        result += val;
    }
    return result;
}
console.log(add2(1, 2, 3, 4, 5, 10));
