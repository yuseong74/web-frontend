module.exports = {
  comments: false,
  minified: true,
  ignore: ['./src/ecmascript-core', './src/ecmascript-next'],
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        // useBuiltIns: 'usage',
        // corejs: '3.8',
      },
    ],
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
  ]
};
