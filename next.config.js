module.exports = {
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    // Important: return the modified config
    config.module.rules.push({
      test: /\.(gif|svg|jpg|png)$/,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    })
    return config
  },
}
