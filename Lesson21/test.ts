namespace com.komavideo {
    // 导出类
    export class KVUser {
        constructor() { }

        sayHelo() {
            console.log("hi, my dear.");
        }
    }

    // 导出函数
    export function showVer() {
        console.log("version is 1.0");
    }

    // 嵌套子名空间
    export namespace util {
        export class MyDatabase {
            private dbname: string;
            constructor(dbname: string) {
                this.dbname = dbname;
            }
            showMe() {
                console.log(this.dbname + " is good.");
            }
        }
    }
}

// let user = new com.komavideo.KVUser();
// user.sayHelo();

// com.komavideo.showVer();

let db = new com.komavideo.util.MyDatabase("oracle");
db.showMe();
