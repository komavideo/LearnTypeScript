常量保存不变值
=============

## 知识点

* 常量定义方法
* 常量的用处

## 常量定义方法

~~~js
// 常量的定义语法
const name:type = initial_value;

// 数据库连接串
const dbstr:string = "ip=192.168.1.10;port=5432;uid=xiaoma;pwd=12345678;";
console.log(dbstr);

dbstr = "new_db_str"; // 编译错误

// 数组常量
const DATA:number[] = [100, 200, 300];
console.log(DATA);

// DATA = [10, 20, 30]; // 编译错误

// 正常赋值
DATA[0] = 10;
DATA[1] = 20;
DATA[2] = 30;
console.log(DATA);

// 数组元素增加
DATA[3] = 40;
console.log(DATA);
~~~

## 常量的用处

+ 系统配置文件路径
+ 数据库连接串
+ 公司名称，电话，邮件地址
+ 画面表示信息（登陆失败，系统出错）

当然，也根据系统设计，也可以把固定信息保存在数据库中。

## 课程文件

https://github.com/komavideo/LearnTypeScript

## 小马视频频道

http://komavideo.com
