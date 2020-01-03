// 联合类型的使用
let mydata: string | boolean | number;

mydata = "Helo TS!";
console.log(mydata);

mydata = true;
console.log(mydata);

// 编译错误
mydata = 100;
