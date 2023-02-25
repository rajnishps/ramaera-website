/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  ...nextConfig,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/Kyc-login.aspx",
        destination: "https://kyc.ramaera.com/Kyc-login.aspx",
        permanent: true,
      },
    ]
  },
}
