const { OPERATION_IS_ONT_ALLOWED } = require('../config/error');
const { checkMoment } = require('../service/permission_service');

const verifyMomentPermission = async (ctx, next) => {
  try {
    const { momentId } = ctx.params;
    const { id } = ctx.user;
    const isPermission = await checkMoment(momentId, id);
    if (!isPermission) return ctx.app.emit('error', OPERATION_IS_ONT_ALLOWED, ctx);

    await next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  verifyMomentPermission,
};
