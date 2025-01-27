/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@'] = __dirname + '/src';
    return config;
  },
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  eslint: {
    ignoreDuringBuilds: true, // Add this line to disable linting during the build process
  },
};

module.exports = nextConfig;
