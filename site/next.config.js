/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm',
    description: 'The official store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://tony55667788.github.io/kasm-registry/',
    contactUrl: 'https://github.com/tony55667788/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
