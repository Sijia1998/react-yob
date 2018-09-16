const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const dbConfig = require('../dataBase/dbConfig'); //导入mysql配置文件
const userSQL = require('../dataBase/userSql');
// 使用dbConfig.js的配置信息创建一个MySQL连接池
// const pool = mysql.createPool(dbConfig.mysql);
// let responseJSON = function (res, ret) {
//     if (typeof ret === 'undefined') {
//         res.json({
//             status: '-200',
//             msg: '操作失败'
//         });
//     } else {
//         res.json(ret);
//     }
// };
// let connection = mysql.createConnection(dbConfig);
let connection = mysql.createConnection(dbConfig);
connection.connect();
//查询所有注册信息
router.get('/getUsers', function (req, res, next) {
  // let querySQL = 'SELECT * FROM websites';
  connection.query(userSQL.queryAll, function (err, result) {
    if (result) {
      data = {
        status: '200',
        msg: '查询成功',
        result,
      };
    }
    //以json形式，把查询结果返回给前台页面
    res.json({
      data,
    })
    //断开连接
  })
})

router.post('/addUsers',function(req,res,next){
  let param = req.body;
  console.log(param);
  let paramObj = 
    [param.userName,
    param.userAge,
    param.danceOfchoice,
    param.phoneNumber,
    param.classesName]
  
  connection.query('INSERT INTO userlists(userName,userAge,danceOfchoice,phoneNumber,classesName) values(?,?,?,?,?)',paramObj,function(err,result){
    if(err){
       console.log("err:",err.message)
       return res.json({
         status:'0',
         msg:'数据添加失败'
       })
    }
    res.json({
      status:'1',
      msg:'数据添加成功',
    })
  })
})

module.exports = router;