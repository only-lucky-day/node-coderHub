// #控制层
const userService = require('../service/user_service.js');
class uesrController {
  async create(ctx, next) {
    //1.用户传递过来的数据  request 接收数据
    const user = ctx.request.body;
    //2.数据库操作
    const result = await userService.create(user);
    //3.查看储存结果，告诉前端创建成功 response 返回数据
    ctx.body = {
      message: '创建成功～',
      data: result,
    };
  }
}
module.exports = new uesrController();
