const auth = require("./auth.middleware");
const status = require("./status.middleware");
const validate = require("./validate.middleware");

module.exports = {
    auth,
    status,
    validate
}