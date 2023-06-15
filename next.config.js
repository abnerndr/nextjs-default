/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    vercel: '',
    baseURL: '',
    siteMeta: {
      url: '',
      domain: '',
      title: '',
      description: '',
      imageUrl: ''
    }
  },
  images: {
    // dominios da aplicação
    domains: ''
  },
  eslint: {
    dirs: ['src']
  },
  reactStrictMode: true,
  typescript: { ignoreBuildErrors: true },
}

module.exports = nextConfig
