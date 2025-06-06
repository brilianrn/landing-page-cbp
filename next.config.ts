const nextConfig = {
  reactStrictMode: process.env.NODE_ENV === "development",
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
  images: {
    domains: [],
  },
  staticPageGenerationTimeout: 1000,
  env: {
    API_URL_LOYALTY: process.env.API_URL_LOYALTY,
    DB_OVVBT_URL: process.env.DB_OVVBT_URL,
    DB_LOYALTY_URL: process.env.DB_LOYALTY_URL,
    JWT_SECRET: process.env.JWT_SECRET,
  },
  // eslint-disable-next-line
  webpack(config: any) {
    // eslint-disable-next-line
    const fileLoaderRule = config.module.rules.find((rule: any) =>
      rule.test?.test?.(".svg")
    );
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ["@svgr/webpack"],
      }
    );
    fileLoaderRule.exclude = /\.svg$/i;
    return config;
  },
};

// module.exports = withPWA(nextConfig);
module.exports = nextConfig;
