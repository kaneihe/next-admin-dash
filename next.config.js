/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',                
            },
            {
                protocol: 'https',
                hostname: 'avatar.vercel.sh'
            },
            {
                protocol: 'https',
                hostname: '*.public.blob.vercel-storage.com'
            }
        ]
    }
};

module.exports = nextConfig;
