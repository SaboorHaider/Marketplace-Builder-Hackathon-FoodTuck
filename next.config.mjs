/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
    images:{
        remotePatterns:[
          {
            hostname:"cdn.sanity.io"
          }
        ]
      }
=======
    images : {
        domains :[
            "images.pexels.com",
            "cdn.sanity.io"
        ],
    },
>>>>>>> e9f6b11 (Update Files)
};

export default nextConfig;
