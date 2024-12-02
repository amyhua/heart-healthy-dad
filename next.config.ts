import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
    AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
    AIRTABLE_ITEMS_TABLE_ID: process.env.AIRTABLE_ITEMS_TABLE_ID,
  }
};

export default nextConfig;
