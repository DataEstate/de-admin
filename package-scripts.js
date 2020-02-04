const { series, concurrent } = require("nps-utils");

module.exports = {
  scripts: {
    default: "npm start",
    flow: "flow",
    local:
      "cross-env NODE_ENV=local webpack-dev-server --open --mode development"
  }
};
