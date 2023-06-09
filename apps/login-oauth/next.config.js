/** @type {import('next').NextConfig} */

const nextConfig = {
  distDir: 'build-next-static',
  swcMinify: true,
  // experimental: {
  //   appDir: true,
  // },
  reactStrictMode: true,
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
  },
};

module.exports = nextConfig;
