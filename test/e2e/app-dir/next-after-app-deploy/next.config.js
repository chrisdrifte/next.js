/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    after: true,
    // DO NOT turn this on, it disables the incremental cache! (see `disableForTestmode`)
    // testProxy: true,
  },
}