// #数据库交互

const connection = require('../app/database.js');
class UserService {
  async create(user) {
    //1.获取user信息
    const { name, password } = user;
    //2.拼接statement
    const statement = 'INSERT INTO `user` (name,password) VALUES(?,?);';
    //3.执行SQL语句
    const [result] = await connection.execute(statement, [name, password]);

    return result;
  }
  //查询用户
  async findUserByName(name) {
    const statement = 'SELECT * FROM `user` WHERE name = ?;';
    const [value] = await connection.execute(statement, [name]);

    return value;
  }
}
module.exports = new UserService();
