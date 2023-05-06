const { OPERATION_IS_ONT_ALLOWED } = require('../config/error');
const { checkPermission } = require('../service/permission_service');

// const verifyMomentPermission = async (ctx, next) => {
//   try {
//     const { momentId } = ctx.params;
//     const { id } = ctx.user;
//     const isPermission = await checkMoment(momentId, id);
//     if (!isPermission) return ctx.app.emit('error', OPERATION_IS_ONT_ALLOWED, ctx);

//     await next();
//   } catch (error) {
//     console.log(error);
//   }
// };
const verifyPermission = async (ctx, next) => {
  try {
    const { id } = ctx.user;
    const keyName = Object.keys(ctx.params)[0];
    const resourceId = ctx.params[keyName];
    const resourceName = keyName.replace('Id', '');
    const isPermission = await checkPermission(resourceId, id, resourceName);
    if (!isPermission) return ctx.app.emit('error', OPERATION_IS_ONT_ALLOWED, ctx);

    await next();
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  verifyPermission,
};
