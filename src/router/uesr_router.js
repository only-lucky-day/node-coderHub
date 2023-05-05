const KoaRouter = require('@koa/router');
const userRouter = new KoaRouter({ prefix: '/users' });
const uesrController = require('../controller/user_controller.js');
const { verifyUser, handlePassword } = require('../middleware/user_middleware.js');

userRouter.post(`/`, verifyUser, handlePassword, uesrController.create);
// userRouter.post(`/list`, uesrController.getUserList);

module.exports = {
  userRouter,
};
