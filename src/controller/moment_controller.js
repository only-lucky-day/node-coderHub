const momentService = require('../service/moment_service.js');
class MomentController {
  async create(ctx, next) {
    try {
      const { content } = ctx.request.body;
      const { id } = ctx.user;
      const result = await momentService.create(content, id);
      ctxBoay(ctx, result, '创建成功～');
    } catch (error) {
      console.log(error);
    }
  }
  async list(ctx, next) {
    try {
      const { offset, size } = ctx.query;
      const result = await momentService.queryList(offset, size);
      ctxBoay(ctx, result, '查询成功～');
    } catch (error) {
      console.log(error);
    }
  }
  async detail(ctx, next) {
    try {
      const { momentId } = ctx.params;
      const result = await momentService.queryDetail(momentId);
      ctxBoay(ctx, result[0], '查询成功～');
    } catch (error) {
      console.log(error);
    }
  }
  async update(ctx, next) {
    try {
      const { momentId } = ctx.params;
      const { content } = ctx.request.body;
      const result = await momentService.update(momentId, content);
      ctxBoay(ctx, result, '修改成功～');
    } catch (error) {
      console.log(error);
    }
  }
  async remove(ctx, next) {
    try {
      const { momentId } = ctx.params;
      const result = await momentService.remove(momentId);
      ctxBoay(ctx, result, '删除成功～');
    } catch (error) {
      console.log(error);
    }
  }
}

function ctxBoay(ctx, result, message) {
  ctx.body = {
    code: 200,
    message,
    data: result,
  };
}
module.exports = new MomentController();
