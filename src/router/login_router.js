const KoaRouter = require('@koa/router');
const loginController = require('../controller/login_controller');
const { verifyLogin, verifyAuth } = require('../middleware/login_middleware');

const loginRouter = new KoaRouter({ prefix: '/login' });

loginRouter.post('/', verifyLogin, loginController.sign);
loginRouter.get('/test', verifyAuth, loginController.test);

module.exports = loginRouter;
/**
 * 登录步骤：
 * 1、判断用户名密码是否为空
 * 2、查询用户是否存在
 * 3、查询密码是否正确
 * 4、验证成功颁发token
 */
