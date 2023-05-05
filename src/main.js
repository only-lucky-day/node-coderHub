const { SERVER_PORT } = require('./config/server.js');
const app = require('../src/app/index.js');
require('./utils/handle-error.js');

app.listen(SERVER_PORT, () => {
  console.log('koa-node-coderHub 启动服务器成功 ~ ');
});
