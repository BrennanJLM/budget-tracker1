const WebpackPwaManifest = require("webpack-pwa-manifest");

plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    }),
    new WebpackPwaManifest({
      name: 'Budget Tracker',
      short_name: 'BgtTrkr',
      description: 'An app that allows you to view upcoming food events.',
      start_url: '../index.html',
      background_color: '#01579b',
      theme_color: '#ffffff',
      fingerprints: false,
      inject: false,
      icons: [
        {
          src: path.resolve('develop/public/icons/icon-512x512.png'),
          sizes: [96, 128, 144, 152, 192, 384, 512],
          destination: path.join('assets', 'icons')
        }
      ]
    })
  ]