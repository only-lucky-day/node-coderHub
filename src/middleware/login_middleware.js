const {
  NAME_IS_ALREDY_EXISTS,
  NAME_RO_PASSWORD_IS_REQUIREN,
  NAME_IS_ONT_EXISTS,
  PASSWORD_IS_INCORRENT,
} = require('../config/error');
const userService = require('../service/user_service');
const { md5Password } = require('../utils/md5-password');

const verifyLogin = async (ctx, next) => {
  const { name, password } = ctx.request.body;
  if (!name || !password) {
    return ctx.app.emit('error', NAME_RO_PASSWORD_IS_REQUIREN, ctx);
  }
  const users = await userService.findUserByName(name);
  const user = users[0];
  if (!user) {
    return ctx.app.emit('error', NAME_IS_ONT_EXISTS, ctx);
  }
  if (user.password !== md5Password(password)) {
    return ctx.app.emit('error', PASSWORD_IS_INCORRENT, ctx);
  }
  ctx.user = user;
  await next();
};
module.exports = {
  verifyLogin,
};
/**
 * 登录步骤：
 * 1、判断用户名密码是否为空
 * 2、查询用户是否存在
 * 3、查询密码是否正确
 * 4、验证成功颁发token
 */
