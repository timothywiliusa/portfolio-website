/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/porfolio-website"
    output: "export",
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'github.com',
            }
        ]
    }
}

module.exports = nextConfig
