// 定义数组
let data:string[] = ['Java', 'Ruby', 'Kotlin', 'Dart'];
console.log(data);
console.log(data[0]);
console.log(data[3]);
console.log(data[4]);

// 追加赋值
data[4] = 'PHP';
console.log(data);
console.log(data[4]);

// 越界赋值
data[10] = 'Go';
console.log(data);
console.log(data[10]);
