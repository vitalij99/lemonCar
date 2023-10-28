/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
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
