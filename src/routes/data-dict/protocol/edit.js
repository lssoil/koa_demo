const Protocol = require('../../../controllers/data-dict/protocol');

module.exports = function (ctx) {
  return Protocol.edit(ctx);
};
