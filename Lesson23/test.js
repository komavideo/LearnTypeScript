var Oracle = /** @class */ (function () {
    function Oracle() {
    }
    Oracle.prototype.connect = function () {
        console.log("[Oracle]数据库连接");
    };
    Oracle.prototype.close = function () {
        console.log("[Oracle]数据库关闭");
    };
    Oracle.prototype.exeSql = function (sql) {
        console.log("[Oracle]sql执行成功");
        return 0;
    };
    return Oracle;
}());
// let mydb: IDatabase = new Oracle();
// mydb.connect();
// mydb.exeSql("select * from table1");
// mydb.close();
var PostgreSQL = /** @class */ (function () {
    function PostgreSQL() {
    }
    PostgreSQL.prototype.connect = function () {
        console.log("[PostgreSQL]数据库连接");
    };
    PostgreSQL.prototype.close = function () {
        console.log("[PostgreSQL]数据库关闭");
    };
    PostgreSQL.prototype.exeSql = function (sql) {
        console.log("[PostgreSQL]sql执行成功");
        return 0;
    };
    return PostgreSQL;
}());
// mydb = new PostgreSQL();
// mydb.connect();
// mydb.exeSql("select * from table1");
// mydb.close();
// 接口参数
function doIt(db) {
    db.connect();
    db.exeSql("update.... ");
    db.close();
}
var oracle = new Oracle();
var pgsql = new PostgreSQL();
doIt(oracle);
doIt(pgsql);
