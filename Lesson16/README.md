参数72变
========

## 知识点

* 定义参数个数不定的函数
* 定义符号：【...】

## 实战演习

~~~js
// 普通函数定义
function add1(vals: number[]): number {
    let result = 0;
    for (let val of vals) {
        result += val;
    }
    return result;
}
console.log(add1([1, 2, 3]));

// 参数可变长函数定义
function add2(...vals: number[]): number {
    let result = 0;
    for (let val of vals) {
        result += val;
    }
    return result;
}
console.log(add2(1, 2, 3));
~~~

## 课程文件

https://github.com/komavideo/LearnTypeScript

## 小马视频频道

http://komavideo.com
