/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["ru", "tj", "en", "ch"],
    defaultLocale: "ru",
  },
  images: {
    domains: [
      "charm.tj",
      "www.designitalianshoes.com",
      "d2si65qo4je8x4.cloudfront.net",
      "192.168.15.199",
      "9e7e-193-33-136-250.ngrok.io",
    ],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
