var com;
(function (com) {
    var komavideo;
    (function (komavideo) {
        // 导出类
        var KVUser = /** @class */ (function () {
            function KVUser() {
            }
            KVUser.prototype.sayHelo = function () {
                console.log("hi, my dear.");
            };
            return KVUser;
        }());
        komavideo.KVUser = KVUser;
        // 导出函数
        function showVer() {
            console.log("version is 1.0");
        }
        komavideo.showVer = showVer;
        // 嵌套子名空间
        var util;
        (function (util) {
            var MyDatabase = /** @class */ (function () {
                function MyDatabase(dbname) {
                    this.dbname = dbname;
                }
                MyDatabase.prototype.showMe = function () {
                    console.log(this.dbname + " is good.");
                };
                return MyDatabase;
            }());
            util.MyDatabase = MyDatabase;
        })(util = komavideo.util || (komavideo.util = {}));
    })(komavideo = com.komavideo || (com.komavideo = {}));
})(com || (com = {}));
// let user = new com.komavideo.KVUser();
// user.sayHelo();
// com.komavideo.showVer();
var db = new com.komavideo.util.MyDatabase("oracle");
db.showMe();
