var和let的区别
==============

## 知识点

* 限定变量的作用范围
* 防止变量的重复定义

## 限定变量的作用范围

~~~js
if (true) {
    var myname:string = "koma";
}

console.log(`Helo ${myname}.`);
~~~

## 防止变量的重复定义

~~~js
var myname:string = "koma";
console.log(`myname is ${myname}.`);

var myname:string = "xiaoma";
console.log(`myname is ${myname}.`);
~~~

## 课程文件

https://github.com/komavideo/LearnTypeScript

## 小马视频频道

http://komavideo.com
