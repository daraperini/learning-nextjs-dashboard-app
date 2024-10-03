// ppr = Partial Prerendering 
// it is still experimental

/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    ppr: "incremental",
  },
};

export default nextConfig;
