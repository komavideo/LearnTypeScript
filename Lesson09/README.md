枚举类型
========

枚举类型是每种编程语言中都支持的变量类型，它可以增加程序代码的可读性。

## 知识点

* 枚举类型的定义
* 枚举类型的使用

## 实战演习

~~~js
// 定义方法
enum name { name1, name2, name3, ... }

// 使用枚举
enum Sex {
    MALE,
    FEMALE,
    UNKNOWN,
}

let member_sex: Sex = Sex.FEMALE;
console.log(member_sex);
console.log(Sex[member_sex]);
//console.log(checkSex(member_sex));

switch (+member_sex) {
    case Sex.MALE:
        console.log("男");
        break;
    case Sex.FEMALE:
        console.log("女");
        break;
    case Sex.UNKNOWN:
        console.log("不明");
        break;
}

function checkSex(sex: Sex) {
    let result: string = "";
    switch (sex) {
        case Sex.MALE:
            result = "男";
            break;
        case Sex.FEMALE:
            result = "女";
            break;
        case Sex.UNKNOWN:
            result = "不明";
            break;
    }
    return result;
}
~~~

## 课程文件

https://github.com/komavideo/LearnTypeScript

## 小马视频频道

http://komavideo.com
