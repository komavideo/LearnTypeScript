联合类型
========

## 知识点

联合类型是指可以包含多种类型的变量类型，在实际项目中其实不常用。

* 联合类型的定义
* 联合类型的使用

## 实战演习

~~~js
// 联合类型的定义
let data: type1 | type2 | type3 | ...;

// 联合类型的使用
let mydata: string | boolean;

mydata = "Helo TS!";
console.log(mydata);

mydata = true;
console.log(mydata);

// 编译错误
// mydata = 100;
~~~

## 课程文件

https://github.com/komavideo/LearnTypeScript

## 小马视频频道

http://komavideo.com
