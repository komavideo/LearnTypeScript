class Database {
    private dbname: string;

    constructor(dbname: string) {
        this.dbname = dbname;
    }

    get name(): string {
        return this.dbname;
    }

    set name(val: string) {
        this.dbname = val;
    }    
}

let db = new Database("oracle is good.");
console.log(db.name);

db.name = "mysql is good too.";
console.log(db.name);
