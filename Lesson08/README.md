多维数组的使用
=============

## 知识点

* 多维数组的定义
* 多维数组的使用

## 实战演习

~~~js
// 一维数组的定义
// let name:type[] = initial;
// ↓
// 多维数组的定义
// let name:type[][] = [[], [], [],...];

// 定义三行五列的数组
let data:number[][] = [
    [1,2,3,4,5],
    [10,20,30,40,50],
    [100,200,300,400,500]
];
console.log(data);

// 第0行
console.log(data[0]); // 每行都是1维数组

// 第1行
console.log(data[1]); // 每行都是1维数组

// 第2行
console.log(data[2]); // 每行都是1维数组

// 第0行第0列
console.log(data[0][0]);
// 第0行第1列
console.log(data[0][1]);

// 第1行第0列
console.log(data[1][0]);
// 第1行第1列
console.log(data[1][1]);

// 第2行第0列
console.log(data[2][0]);
// 第2行第1列
console.log(data[2][1]);
~~~

## 课程文件

https://github.com/komavideo/LearnTypeScript

## 小马视频频道

http://komavideo.com
