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

// let mydb: IDatabase = new Oracle();
// mydb.connect();
// mydb.exeSql("select * from table1");
// mydb.close();

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

// mydb = new PostgreSQL();
// mydb.connect();
// mydb.exeSql("select * from table1");
// mydb.close();


// 接口参数
function doIt(db: IDatabase) {
    db.connect();
    db.exeSql("update.... ");
    db.close();
}
let oracle: IDatabase = new Oracle();
let pgsql: IDatabase = new PostgreSQL();

doIt(oracle);
doIt(pgsql);
