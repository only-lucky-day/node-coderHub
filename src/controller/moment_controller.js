const momentService = require('../service/moment_service.js');
class MomentController {
  async create(ctx, next) {
    const { content } = ctx.request.body;
    const { id } = ctx.user;
    //2.数据库操作
    const result = await momentService.create(content, id);
    //3.查看储存结果，告诉前端创建成功 response 返回数据
    ctx.body = {
      code: 200,
      message: '创建成功～',
      data: result,
    };
  }
}
module.exports = new MomentController();
