import request = require('request');
request('http://api.komavideo.com/news/list', function (error, response, body) {
    if (error)
        console.error(error);
    else {
        console.log(body);
    }
});
