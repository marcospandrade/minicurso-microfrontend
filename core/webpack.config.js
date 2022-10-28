const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "mp",
    projectName: "core",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: ['react, react-dom']
  });
};
