/** @type {import('next').NextConfig} */
const rewrites = () => {
  return [
    {
      source: "/api/:path*",
      destination: "http://localhost:5204/api/:path*",
    },
  ];
};

const nextConfig = {
  reactStrictMode: true,
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
  images: {
    loader: 'akamai',
    path: '/',
  },
  rewrites,
}

module.exports = nextConfig
