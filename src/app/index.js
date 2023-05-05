const Koa = require('koa');
const { userRouter } = require('../router/uesr_router.js');
const { loginRouter } = require('../router/login_router.js');

const bodyParser = require('koa-bodyparser');
const registeRouters = require('../router/index.js');

const app = new Koa();

app.use(bodyParser());
registeRouters(app);
// console.log(userRouter.routes);
// app.use(userRouter.routes());
// app.use(userRouter.allowedMethods());

// app.use(loginRouter.routes());
// app.use(loginRouter.allowedMethods());

module.exports = app;
