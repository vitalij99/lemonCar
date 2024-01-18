/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
    ],
  },
};

// webSocket
// const nextConfig = {
//   webpack: config => {
//     config.externals.push({
//       'utf-8-validate': 'commonjs utf-8-validate',
//       bufferutil: 'commonjs bufferutil',
//     });

//     return config;
//   },
//   images: {
//     domains: ['res.cloudinary.com'],
//   },
// };

module.exports = nextConfig;
