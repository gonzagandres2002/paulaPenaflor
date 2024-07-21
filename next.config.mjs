/** @type {import('next').NextConfig} */
const nextConfig = {};

const withNextIntl = require('next-intl/plugin')();
 
module.exports = withNextIntl({
  // Any other Next.js configuration ...
});

export default nextConfig;
