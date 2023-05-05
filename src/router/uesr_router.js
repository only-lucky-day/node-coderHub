const KoaRouter = require('@koa/router');
const uesrController = require('../controller/user_controller.js');
const { verifyUser, handlePassword } = require('../middleware/user_middleware.js');

const userRouter = new KoaRouter({ prefix: '/users' });

userRouter.post(`/`, verifyUser, handlePassword, uesrController.create);

module.exports = userRouter;
