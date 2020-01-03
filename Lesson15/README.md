可省略参数
==========

## 知识点

* 定义可省略参数的函数
* 定义符号：?

## 实战演习

~~~js
function sayHelo(name: string): string {
    if (name === undefined) {
        return "Helo Koma.";
    } else {
        return "Helo " + name + ".";
    }
}

console.log(sayHelo("Trump"));
//console.log(sayHelo());

// function sayHelo(name?: string): string {
//     if (name === undefined) {
//         return "Helo Koma.";
//     } else {
//         return "Helo " + name + ".";
//     }
// }

// function sayHelo(name: string = "Koma"): string {
//     return "Helo " + name + ".";
// }
~~~

## 课程文件

https://github.com/komavideo/LearnTypeScript

## 小马视频频道

http://komavideo.com
