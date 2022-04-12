const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");

const nextConfig = withPlugins([
  {
    reactStrictMode: true,
  },
  [
    withPWA,
    {
      pwa: {
        disable: process.env.NODE_ENV === "development",
        dest: "public",
        register: true,
        skipWaiting: true,
        sw: "sw.js",
      },
    },
  ],
]);

module.exports = nextConfig;
