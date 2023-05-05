const jwt = require('jsonwebtoken');
const { PRIVATE_KEY, PUBLIC_KEY } = require('../config/screct');
const { UNAUTHORIZATION } = require('../config/error');

class LoginController {
  sign(ctx, next) {
    const { id, name } = ctx.user;
    const token = jwt.sign({ name, id }, PRIVATE_KEY, {
      expiresIn: 24 * 60 * 60 * 1,
      algorithm: 'RS256',
    });
    ctx.body = { code: 200, data: { id, name, token } };
  }

  test(ctx, next) {
    ctx.body = `访问成功~`;
  }
}
module.exports = new LoginController();

/**
 * 登录步骤：
 * 4、验证成功颁发token
 */
