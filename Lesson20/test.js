var Database = /** @class */ (function () {
    function Database() {
    }
    Database.connect = function () {
        if (this.dbname)
            console.log(this.dbname + "->连接中...");
        else
            console.log("数据库未指定");
    };
    Database.prototype.showDB = function () {
        console.log("Hi my database.");
    };
    return Database;
}());
// let db = new Database(...);
Database.dbname = "dbtype=Oracle;ip=192.168.1.1;uid=admin;pwd=12345678;";
console.log(Database.dbname);
Database.connect();
Database.showDB();
