null空检查
==========

## 知识点

空检查用于代码编译时对程序内的变量做null空值检查，来避免业务级别的错误。

* null赋值代码
* tsc和tsconfig.json的用法

## 实战演习

~~~js
let mydata1: string = undefined;
let mydata2: string = null;
let mydata3: string = "";
mydata3 = null;
~~~

### tsconfig.json准备

~~~bash
$ tsc --init
$ nano tsconfig.json
...
    "strictNullChecks": false
...
$ tsc
~~~

## 课程文件

https://github.com/komavideo/LearnTypeScript

## 小马视频频道

http://komavideo.com
