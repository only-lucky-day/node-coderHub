// 错误信息反馈中心
const app = require('../app');
const {
  NAME_RO_PASSWORD_IS_REQUIREN,
  NAME_IS_ALREDY_EXISTS,
  NAME_IS_ONT_EXISTS,
  PASSWORD_IS_INCORRENT,
} = require('../config/error');

app.on('error', (error, ctx) => {
  let code = 0;
  let message = '';
  switch (error) {
    case NAME_RO_PASSWORD_IS_REQUIREN:
      code = -1001;
      message = '用户名或者密码不能为空～';
      break;
    case NAME_IS_ALREDY_EXISTS:
      code = -1002;
      message = '用户名已被占用～';
      break;
    case NAME_IS_ONT_EXISTS:
      code = -1003;
      message = '用户不存在,请检查用户名~';
      break;
    case PASSWORD_IS_INCORRENT:
      code = -1004;
      message = `输入的密码不正确,请检查密码~`;
  }
  ctx.body = { code, message };
});
