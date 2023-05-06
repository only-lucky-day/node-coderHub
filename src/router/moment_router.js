const KoaRouter = require('@koa/router');
const { verifyAuth } = require('../middleware/login_middleware.js');
const momentController = require('../controller/moment_controller.js');
const { verifyMomentPermission } = require('../middleware/permission_middleware.js');

const momentRouter = new KoaRouter({ prefix: '/moment' });
//add
momentRouter.post(`/`, verifyAuth, momentController.create);
//query
momentRouter.get(`/`, momentController.list);
momentRouter.get(`/:momentId`, momentController.detail);
//update
momentRouter.patch('/:momentId', verifyAuth, verifyMomentPermission, momentController.update);
//delete
momentRouter.delete('/:momentId', verifyAuth, verifyMomentPermission, momentController.remove);
module.exports = momentRouter;
