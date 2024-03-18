/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        domains: ['avatars.githubusercontent.com', "lh3.googleusercontent.com",
            "res.cloudinary.com", "images.unsplash.com", "cdn.pixabay.com"
        ]
    },
    experimental: { appDir: true, },
};

export default nextConfig;

