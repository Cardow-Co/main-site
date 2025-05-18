// Disable all ESLint checks in this file
/* eslint-disable */

// Load local env vars for DevLink
require("dotenv").config({ path: "./.env.local" });

module.exports = {
  host: "https://api.webflow.com", // Webflow API endpoint
  rootDir: "./devlink", // Directory for synced components
  cssModules: true, // Use CSS modules for styles
  siteId: process.env.WEBFLOW_SITE_ID, // Webflow Site ID from env
  authToken: process.env.WEBFLOW_SITE_API_TOKEN, // Webflow API token from env
};
