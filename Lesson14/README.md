箭头函数
========

## 知识点

* 箭头函数的定义
* 箭头函数的使用

### 箭头函数的定义

~~~js
(param:type, ...):return_type => { 函数内容 }
~~~

### 箭头函数的使用

~~~js
function add(x:number, y:number) : number {
    return x + y;
}
console.log(add(10, 5));

let func_add = (x:number, y:number):number => {
    return x + y;
}
console.log(func_add(10, 5));
~~~

## 课程文件

https://github.com/komavideo/LearnTypeScript

## 小马视频频道

http://komavideo.com
