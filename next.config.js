/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
    localeDetection: false,
  },
  reactStrictMode: true,
  images: {
    domains: ["s3.eu-central-1.amazonaws.com"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/price",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
