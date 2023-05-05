const fs = require('fs');

function registeRouters(app) {
  //获取当前文件夹下的所有文件
  const files = fs.readdirSync(__dirname);

  //遍历所有文件
  for (const file of files) {
    //只引入 _router.js 结尾的文件
    if (!file.endsWith('_router.js')) continue;
    const router = require(`./${file}`);
    console.log(`./${file}`, router.routes);

    app.use(router.routes());
    app.use(router.allowedMethods());
  }
}

module.exports = registeRouters;
