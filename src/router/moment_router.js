const KoaRouter = require('@koa/router');
const { verifyAuth } = require('../middleware/login_middleware.js');
const momentController = require('../controller/moment_controller.js');

const momentRouter = new KoaRouter({ prefix: '/moment' });

momentRouter.post(`/`, verifyAuth, momentController.create);

module.exports = momentRouter;
