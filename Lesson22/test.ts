class Database {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    showInfo() {
        console.log(`您使用的数据库是：${this.name}`);
    }
}

class MySql extends Database { }

let mydb = new MySql("mysql");
mydb.showInfo();
