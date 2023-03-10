const deps = require("./package.json").dependencies;

module.exports = {
  name: "app1",
  remotes: {
    app1: "app1@http://localhost:3001/remoteEntry.js",
    app2: "app2@http://localhost:3002/remoteEntry.js",
  },
  filename: "remoteEntry.js",
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
  },
};
