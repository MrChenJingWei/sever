/**
 * Created by qingyun on 16/9/25.
 */

var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public'))); //配置静态文件路径

app.listen(5555,function () {
    console.log("http://localhost:80");
});