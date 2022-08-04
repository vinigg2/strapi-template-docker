const enrichCtx = (ctx) => {
  if (!ctx.query) {
    ctx.query = {};
  }

  ctx.query.populate = "deep";
  return ctx;
};

module.exports = (config, { strapi }) => {
  return async (context, next) => {
    const newCtx = enrichCtx(context);
    context = newCtx;
    await next();
  };
};