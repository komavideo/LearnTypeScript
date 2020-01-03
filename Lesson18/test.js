var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Database = /** @class */ (function () {
    function Database(dbname) {
        this.dbname = dbname;
    }
    // 外部调用
    Database.prototype.showDB = function () {
        console.log("\u6570\u636E\u5E93\uFF1A" + this.dbname);
    };
    // 本类和子类调用
    Database.prototype.connect = function () {
        console.log("" + this.dbname, "连接中...");
    };
    // 本类调用
    Database.prototype.disconnect = function () {
        console.log("" + this.dbname, "关闭.");
    };
    return Database;
}());
var oracle = new Database("Oracle甲骨文");
oracle.showDB();
// oracle.connect();
// oracle.disconnect();
var PostgreSql = /** @class */ (function (_super) {
    __extends(PostgreSql, _super);
    function PostgreSql() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PostgreSql.prototype.doIt = function () {
        _super.prototype.connect.call(this);
        _super.prototype.disconnect.call(this);
    };
    return PostgreSql;
}(Database));
var postgres = new PostgreSql("PostgreSql小象");
postgres.showDB();
postgres.doIt();
