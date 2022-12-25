/* eslint-disable */
/** @type {import('next').NextConfig} */
require("dotenv").config();

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    DEV_URL: process.env.DEV_URL,
    MONGO_URL: process.env.MONGO_URL,
    DB_NAME: process.env.DB_NAME,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
