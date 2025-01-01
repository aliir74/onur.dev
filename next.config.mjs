import million from 'million/compiler'

/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: process.env.NODE_ENV === 'development'
    }
  },
  compiler: {
    removeConsole: {
      exclude: ['error', 'info']
    }
  },
  trailingSlash: false,
  images: {
    deviceSizes: [390, 435, 768, 1024, 1280],
    formats: ['image/avif']
  },
  async redirects() {
    return [
      {
        source: '/links',
        destination: 'https://t.me/+3CqRmaAHDj5lOTE0',
        permanent: false
      },
      {
        source: '/tg',
        destination: 'https://t.me/+3WJX7dt-ov85ZDhk',
        permanent: false
      },
      {
        source: '/yt',
        destination: 'https://youtube.com/@aliir74',
        permanent: false
      }
    ]
  },
  experimental: {
    optimizePackageImports: ['framer-motion', '@supabase/supabase-js', 'react-tweet'],
    webVitalsAttribution: ['FCP', 'LCP', 'CLS', 'FID', 'TTFB', 'INP']
  }
}

const millionConfig = {
  auto: {
    rsc: true
  },
  server: true,
  rsc: true
}

export default million.next(nextConfig, millionConfig)
