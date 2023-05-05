// # 用户 中间件
const userService = require('../service/user_service.js');
const { NAME_RO_PASSWORD_IS_REQUIREN, NAME_IS_ALREDY_EXISTS } = require('../config/error.js');
const app = require('../app');
const { md5Password } = require('../utils/md5-password.js');
const verifyUser = async (ctx, next) => {
  //逻辑判断中间件
  const { name, password } = ctx.request.body;
  //2.拦截异常请求
  if (!name || !password) {
    //2.1 空数据拦截
    return ctx.app.emit('error', NAME_RO_PASSWORD_IS_REQUIREN, ctx);
  }

  const users = await userService.findUserByName(name);
  if (users.length) {
    //2.2 重复数据拦截
    return ctx.app.emit('error', NAME_IS_ALREDY_EXISTS, ctx);
  }
  await next();
};

const handlePassword = async (ctx, next) => {
  //密码加密
  let { password } = ctx.request.body;
  ctx.request.body.password = md5Password(password);
  await next();
};

module.exports = {
  verifyUser,
  handlePassword,
};
