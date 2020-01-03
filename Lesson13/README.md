函数的使用
==========

## 知识点

* 函数的定义
* 函数的使用

### 函数的定义

~~~js
function fname(param1:type, param2:type, ...) : return_type {
    // 函数内容
}
~~~

### 函数的使用

~~~js
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
console.log(func_add(10, 5));
console.log(func_mul(10, 5));
~~~

## 课程文件

https://github.com/komavideo/LearnTypeScript

## 小马视频频道

http://komavideo.com
