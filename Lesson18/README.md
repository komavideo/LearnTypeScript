类的访问限制
===========

## 知识点

* 类的访问修饰符
  + public:共有访问
  + protected:本类和子类访问
  + private:本类访问

## 实战演习

~~~js
class Database {
    dbname: string;

    constructor(dbname: string) {
        this.dbname = dbname;
    }

    // 外部调用
    public showDB() {
        console.log(`数据库：${this.dbname}`);
    }

    // 本类和子类调用
    protected connect() {
        console.log(`${this.dbname}`, "连接中...");
    }

    // 本类调用
    private disconnect() {
        console.log(`${this.dbname}`, "关闭.");
    }
}

let oracle = new Database("Oracle甲骨文");
oracle.showDB();
// oracle.connect();
// oracle.disconnect();

class PostgreSql extends Database {
    public doIt() {
        super.connect();
        // super.disconnect();
    }
}

let postgres = new PostgreSql("PostgreSql小象");
postgres.showDB();
postgres.doIt();
~~~

## 课程文件

https://github.com/komavideo/LearnTypeScript

## 小马视频频道

http://komavideo.com
