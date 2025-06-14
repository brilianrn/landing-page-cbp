const nextConfig = {
  reactStrictMode: process.env.NODE_ENV === "development",
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
  images: {
    domains: [],
  },
  staticPageGenerationTimeout: 1000,
  env: {
    BASE_URL: process.env.BASE_URL,
    TITLE: process.env.TITLE,
    DESCRIPTION: process.env.DESCRIPTION,
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
