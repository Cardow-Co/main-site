module.exports = {
  devlink: {
    host: "https://api.webflow.com",
    rootDir: "./devlink",
    cssModules: true,
    siteId: process.env.WEBFLOW_SITE_ID,
    authToken: process.env.WEBFLOW_SITE_API_TOKEN,
  },
};
