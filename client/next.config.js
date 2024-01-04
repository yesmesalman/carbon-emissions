/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'evercity-carbon-public-store.s3.eu-central-1.amazonaws.com',
            },
            {
                protocol: 'https',
                hostname: 'carbon-emissions.s3.us-east-2.amazonaws.com',
            },
        ],
    },
    env: {
        DATABASE_URL: process.env.DATABASE_URL,
        DEFAULT_USER_ROLE_ID: process.env.DEFAULT_USER_ROLE_ID,
        DEFAULT_USER_PASSWORD: process.env.DEFAULT_USER_PASSWORD,
        JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    },
}

module.exports = nextConfig
