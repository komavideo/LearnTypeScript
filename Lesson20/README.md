静态成员
========

静态成员是指不用类实例化就能够访问使用的属性和方法。

## 知识点

* 静态成员定义方法
* 关键字：static

## 实战演习

~~~js
class Database {
    public static dbname: string;

    constructor() {
    }

    public static connect() {
        if (this.dbname)
            console.log(this.dbname + "->连接中...");
        else
            console.log("数据库未指定");
    }

    public showDB() {
        console.log("Hi my database.");
    }
}

// let db = new Database(...);

Database.dbname = "dbtype=Oracle;ip=192.168.1.1;uid=admin;pwd=12345678;"
console.log(Database.dbname);
Database.connect();
// Database.showDB();
~~~

## 课程文件

https://github.com/komavideo/LearnTypeScript

## 小马视频频道

http://komavideo.com
