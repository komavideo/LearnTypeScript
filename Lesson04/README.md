变量声明要注意
=============

## 知识点

* 变量使用前要定义
* 变量类型
* any类型

## 变量使用前要定义

~~~js
// let/var 变量名:变量类型 = 默认值;
let myname:string = "koma";
console.log("My name is " + myname);

var myage:number = 25;
console.log("My age  is " + myage);
~~~

## 变量类型

+ number:数值型
+ string:字符串
+ boolean:布尔类型
+ symbol:符号类型,标识唯一对象
+ any:任意类型
+ object:对象类型（数组,元组,类,接口,函数等）

~~~js
let myname:string = "koma";
console.log("My name is " + myname);
myname = 100; // 编译错误,类型不匹配

var myage:number = 25;
console.log("My age  is " + myage);
myage = "xiaoma"; // 编译错误,类型不匹配
~~~

## any类型

*小马不推荐!!!*

~~~js
// any类型让编译器忽略类型检测
let mylang:any = "typescript";
console.log("My Language is " + mylang);
mylang = 100;
console.log("My Language is " + mylang);
~~~

## 课程文件

https://github.com/komavideo/LearnTypeScript

## 小马视频频道

http://komavideo.com
