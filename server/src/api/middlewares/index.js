const auth = require("./auth.middleware");
const status = require("./status.middleware");

module.exports = {
    auth,
    status
}