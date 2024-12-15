import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint:{
    ignoreDuringBuilds:true
  },
  images:{
    remotePatterns:[
      {
      protocol:"https",
      hostname:"www.fotolip.com"
    },
    {
      protocol:"https",
      hostname:"image.tmdb.org",
    },
    {
      protocol:"https",
      hostname:"wikimedia.org"
    }
    
  
  
  
  ]
  }
};

export default nextConfig;
