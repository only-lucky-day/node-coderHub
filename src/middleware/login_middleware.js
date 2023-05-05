const jwt = require('jsonwebtoken');
const {
  NAME_RO_PASSWORD_IS_REQUIREN,
  NAME_IS_ONT_EXISTS,
  PASSWORD_IS_INCORRENT,
  UNAUTHORIZATION,
} = require('../config/error');
const { PUBLIC_KEY } = require('../config/screct');
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
const verifyAuth = async (ctx, next) => {
  //获取token
  try {
    const authorization = ctx.headers.authorization;
    const token = authorization.replace('Bearer ', '');
    const result = jwt.verify(token, PUBLIC_KEY, {
      algorithms: 'RS256',
    });
    ctx.user = result;
    await next();
  } catch (error) {
    console.log(error);
    ctx.app.emit('error', UNAUTHORIZATION, ctx);
  }
};
module.exports = {
  verifyLogin,
  verifyAuth,
};
/**
 * 登录步骤：
 * 1、判断用户名密码是否为空
 * 2、查询用户是否存在
 * 3、查询密码是否正确
 * 4、验证成功颁发token
 */
