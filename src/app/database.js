// #连接数据库
const mysql = require('mysql2');
//1.创建连接池
const connectionPool = mysql.createPool({
  host: 'localhost',
  port: '3306',
  database: 'coderhob',
  user: 'root',
  password: 'password1!',
  connectionLimit: 5,
});
//2.连接状态
connectionPool.getConnection((err, connection) => {
  //1.判断是否有错误信息
  if (err) {
    console.log('获取连接失败～');
    return;
  }
  //2.connection  尝试和数据库连接
  connection.connect((err) => {
    if (err) {
      console.log('和数据库交互失败～');
    } else {
      console.log('和数据库交互成功，可以进行操作～');
    }
  });
});
//3.获取连接池中的连接对象
const connection = connectionPool.promise();

module.exports = connection;
