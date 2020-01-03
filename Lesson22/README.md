类继承
======

## 知识点

* 类继承设计
* 关键字：extends

## 实战演习

### 类继承模板

~~~js
class child_class extends parent_class {
    ...
}
~~~

### 类继承实例

~~~js
class Database {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    showInfo() {
        console.log(`您使用的数据库是：${this.name}`);
    }
}

class MySql extends Database { }

let mydb = new MySql("mysql");
mydb.showInfo();
~~~

## 课程文件

https://github.com/komavideo/LearnTypeScript

## 小马视频频道

http://komavideo.com
