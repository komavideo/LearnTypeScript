名空间
======

来吧，把类分家。

## 知识点

* 定义名空间
* 关键字：namespace

## 实战演习

~~~js
// 定义方法
namespace ns_name {
    export class class_name {}
    export function func_name {}
    export namespace ns_name {}
}
~~~
 
### 使用名空间

~~~js
namespace com.komavideo {
    // 导出类
    export class KVUser {
        constructor() { }

        sayHelo() {
            console.log("hi, my dear.");
        }
    }

    // 导出函数
    export function showVer() {
        console.log("version is 1.0");
    }

    // 嵌套子名空间
    export namespace util {
        export class MyDatabase {
            private dbname: string;
            constructor(dbname: string) {
                this.dbname = dbname;
            }
            showMe() {
                console.log(this.dbname + " is good.");
            }
        }
    }
}

let user = new com.komavideo.KVUser();
user.sayHelo();

com.komavideo.showVer();

let db = new com.komavideo.util.MyDatabase("oracle");
db.showMe();
~~~

## 课程文件

https://github.com/komavideo/LearnTypeScript

## 小马视频频道

http://komavideo.com
