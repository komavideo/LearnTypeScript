第三方库的使用
=============

## 知识点

* node库准备
* 类型定义文件(tsd)导入
* ts编码使用js第三方库

## 实战演习

### node-request库安装

~~~bash
$ npm init
$ npm install --save request
~~~

### 利用node-request库

~~~js
const request = require('request');
request('http://api.komavideo.com/news/list', function (error, response, body) {
    if (error)
        console.error(error);
    else {
        console.log(body);
        // var body = JSON.parse(body);
        // for(var i = 0; i < body.length; i++){
        //     var item = body[i];
        //     console.log(item.title);
        // }
    }
});
~~~

~~~ts
// 同上
~~~

## typescript的使用方法

1. 找到tsd文件
2. 导入tsd文件
3. 编写代码
4. 编译运行

### 找到tsd文件（TypeSearch-微软提供）

https://microsoft.github.io/TypeSearch/

### 导入tsd文件

~~~bash
$ npm install --save @types/request
~~~

### 编写ts代码

~~~js
import request = require('request');
request('http://api.komavideo.com/news/list', function (error, response, body) {
    if (error)
        console.error(error);
    else {
        console.log(body);
    }
});
~~~

### 编译运行

~~~bash
$ tsc test
$ node test
~~~

## 课程文件

https://github.com/komavideo/LearnTypeScript

## 小马视频频道

http://komavideo.com
