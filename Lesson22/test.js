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
    function Database(name) {
        this.name = name;
    }
    Database.prototype.showInfo = function () {
        console.log("\u60A8\u4F7F\u7528\u7684\u6570\u636E\u5E93\u662F\uFF1A" + this.name);
    };
    return Database;
}());
var MySql = /** @class */ (function (_super) {
    __extends(MySql, _super);
    function MySql() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MySql;
}(Database));
var mydb = new MySql("mysql");
mydb.showInfo();
