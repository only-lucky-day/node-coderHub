const KoaRouter = require('@koa/router');
const { verifyAuth } = require('../middleware/login_middleware');
const { create, reply } = require('../controller/comment_controller');

const commentRouter = new KoaRouter({ prefix: '/comment' });

commentRouter.post('/', verifyAuth, create);
commentRouter.post('/reply', verifyAuth, reply);

module.exports = commentRouter;
