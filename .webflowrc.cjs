// Disable all ESLint checks in this file
/* eslint-disable */

// Load local env vars for DevLink
require("dotenv").config({ path: "./.env.local" });

module.exports = {
  devlink: {
    host: "https://api.webflow.com",
    rootDir: "./devlink",
    cssModules: true,
    siteId: process.env.WEBFLOW_SITE_ID,
    authToken: process.env.WEBFLOW_SITE_API_TOKEN,
  },
};
