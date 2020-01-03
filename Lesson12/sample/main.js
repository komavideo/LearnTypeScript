const request = require('request');

request('http://api.komavideo.com/news/list', function (error, response, body) {
    if (error)
        console.error(error);
    else {
        // console.log(body);
        var body = JSON.parse(body);
        for(var i = 0; i < body.length; i++){
            var item = body[i];
            console.log(item.title);
        }
    }
});
