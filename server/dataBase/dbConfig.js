const dbConfig = {
    host: 'localhost', //主机
    user: 'root', // 数据库用户名
    password: 'zhusijia', //数据库密码
    database: 'yob', //数据库名称
}

module.exports = dbConfig;

// connection.connect(function (err) {
//     if (err) {
//         return console.log('error:' + err.message)
//     }
// })
// var querySql = 'SELECT * FROM websites';
// // var modSql = 'UPDATE websites SET name = ?,url = ? WHERE Id = ?';
// // var modSqlParams = ['菜鸟移动站', 'https://m.runoob.com', 7];
// connection.query(querySql, function (err2, result) {
//     if (err2) {
//         console.log(err.message);
//         return;
//     }
//     console.log('--------------------------QUERY----------------------------');
//     console.log('querySql RESULT', result);
//     console.log('-----------------------------------------------------------------\n\n');
// })