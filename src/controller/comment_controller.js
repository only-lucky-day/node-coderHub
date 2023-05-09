const commentService = require('../service/comment_service.js');
class CommentController {
  async create(ctx, next) {
    try {
      const { content, momentId } = ctx.request.body;
      const { id } = ctx.user;
      const result = await commentService.create(content, id, momentId);
      ctx.body = {
        code: 200,
        message: '评论成功～',
        data: result,
      };
    } catch (error) {
      console.log(error);
    }
  }
  async reply(ctx, next) {
    try {
      const { content, momentId, commentId } = ctx.request.body;
      const { id } = ctx.user;
      const result = await commentService.reply(content, id, momentId, commentId);
      ctx.body = {
        code: 200,
        message: '回复成功~',
        data: result,
      };
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = new CommentController();
