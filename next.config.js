/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  env: {
    NEXT_PUBLIC_APP_NAME: 'XINTIPI.XYZ',
    NEXT_PUBLIC_GA_TRACKING_ID: 'G-E262R9BKQX',
    NEXT_PUBLIC_OTHER_DOMAIN: 'https://rainymood.xyz/',
    NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION: 'dSJT4Ih39PiDmWkaFm67yOKk5m5vM45MODdbCNCSbGg',
  },
}

module.exports = withBundleAnalyzer({
  ...nextConfig,
})
