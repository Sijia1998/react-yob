const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost', //主机
    user: 'root', // 数据库用户名
    password: 'zhusijia', //数据库密码
    database: 'yob', //数据库名称
})

moudule.exports = connection