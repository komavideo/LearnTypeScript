接口
=====

## 知识点

* 接口的定义
* 接口的使用

## 实战演习

### 接口的定义

~~~js
interface name {
    // 接口定义内容
}
~~~

### 接口的使用

~~~js
interface IDatabase {
    connect(): void;
    close(): void;
    exeSql(sql: string): number;
}

class Oracle implements IDatabase {
    connect() {
        console.log("[Oracle]数据库连接");
    }
    close() {
        console.log("[Oracle]数据库关闭");
    }
    exeSql(sql: string) {
        console.log("[Oracle]sql执行成功");
        return 0;
    }
}

let oracle: IDatabase = new Oracle();
oracle.connect();
oracle.exeSql("select * from table1");
oracle.close();

class PostgreSQL implements IDatabase {
    connect() {
        console.log("[PostgreSQL]数据库连接");
    }
    close() {
        console.log("[PostgreSQL]数据库关闭");
    }
    exeSql(sql: string) {
        console.log("[PostgreSQL]sql执行成功");
        return 0;
    }
}

let pgsql: IDatabase = new PostgreSQL();
pgsql.connect();
pgsql.exeSql("select * from table1");
pgsql.close();

// 接口参数
// function doIt(db: IDatabase) {
//     db.connect();
//     db.exeSql("");
//     db.close();
// }
// doIt(oracle);
// doIt(pgsql);
~~~

## 课程文件

https://github.com/komavideo/LearnTypeScript

## 小马视频频道

http://komavideo.com
