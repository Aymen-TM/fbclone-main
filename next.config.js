/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:[
      "platform-lookaside.fbsbx.com",
      "upload.wikimedia.org",
      "firebasestorage.googleapis.com"
    ]
  }
}

module.exports = nextConfig
