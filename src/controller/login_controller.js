const jwt = require('jsonwebtoken');
const { PRIVATE_KEY } = require('../config/screct');

class loginController {
  sign(ctx, next) {
    const { id, name } = ctx.user;
    console.log(id, name);
    const private_key = PRIVATE_KEY;
    const token = jwt.sign({ name, id }, private_key, {
      expiresIn: 24 * 60 * 60 * 1,
      algorithm: 'RS256',
    });
    /**
     * , {
      expiresIn: 24 * 60 * 60,
      algorithm: 'RS256',
    }
     */
    ctx.body = { code: 200, data: { id, name, token } };

    // console.log(
    //   'token',
    //   jwt.sign(
    //     { id: 11 },
    //     `-----BEGIN RSA PRIVATE KEY-----
    // MIICXQIBAAKBgQDFTNqWPsUrRmkncuCO02C/wT7reW1/R6qre7ICOQyuYkUN7cU+
    // pwqmhlAV+Tx80zImQSen/Mc7Gl4crMhRqtenrRdPiA5VDYN0cslpjuO0Qe5zw69h
    // /3w4g9qqLvLEwam/IBS54phNBUrzAkQMg4j37HzgbGO9OuKABnnjVVAyfQIDAQAB
    // AoGBAJPU1v+2fqPDOS0OvUUnCpoDILLtI+c3eqDMqP9TYbYT+avLGXytSqSlhMJC
    // IllhIXVaYm1TULBvPE7+A4Z1nOk7XwsS5DfvMkx1ikMzDlqVMlIe6k/YPhn3SeEM
    // mpvTHMd/PY9cHWZmOkqKL4ZEImFKh7V/XNs4qdWQR3i+C+4dAkEA8mB0Xyx5S3Z1
    // gwBdqEqBG1zdy6Lr9eL0Cv/thVVQHGjaqU81lkLt8HyzBYgkEZqyVorBHFrxmiai
    // xtOMJuvOtwJBANBjy5Em/j9GAVnsu6aHcfPf+LvpKbeCk/khAr917RBvqG63eA8a
    // tAjDtw0+h9FmHQV4FryBixLnvQTxQX25lGsCQAEXTA7NnXIog1jmnIVQaIpd/aWY
    // AyXlMqIGCuSpwKWQF0Ph1mTpwjZt6URiG390yc636yycgC/ocp0ggKYAM7sCQQCT
    // 0OX5zTX1fdvBhKnKwzKycYGHESn1MJtz0NWZJ7YDvaA1ANEZrbBcsy8qJtvCTfNy
    // CK/gAOe8fkLWuabh3nyHAkB8YWcBTysdnesZ+caT6CHcYPxQED8bYzGzaut8Was8
    // 3LJWY4i7TXgSmmLglLQB0ToRPKEf4aL6BPm5mJI2Oh5v
    // -----END RSA PRIVATE KEY-----`,
    //   ),
    // );

    // ctx.body = {
    //   code: 200,
    //   data: {
    //     token,
    //     id,
    //     name,
    //   },
    // };
  }
}
module.exports = new loginController();

/**
 * 登录步骤：
 * 4、验证成功颁发token
 */
