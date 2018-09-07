const express = require('express');
const router = express.Router();
const connection = require('../dataBase/connect'); //导入mysql配置文件

connection.connect(function (err) {
    if (err) {
        console.log('[query] - :' + err);
        return;
    }
    console.log('[connection connect] succeed!');
})

app.get('/', function (req, res, next) {
    let res = res;
    let req = req;

    //执行SQL语句，这里是一条简单的MySQL查询语句
    let sql = "select description,title,content,time from "
})