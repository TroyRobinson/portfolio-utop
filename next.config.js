module.exports = {
  // This ensures Next.js uses the src directory structure
  pageExtensions: ['js', 'jsx', 'mdx'],
  // Preserve the existing public directory
  distDir: '.next',
  // Use experimental flag for src directory support in Next.js 9
  experimental: {
    modern: true
  },
  // Keep webpack config minimal
  webpack: (config, { isServer }) => {
    // MDX files can be imported as components
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        {
          loader: '@mdx-js/loader',
        }
      ],
    });

    return config;
  }
}