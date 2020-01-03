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
