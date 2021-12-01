module.exports = {
  presets: ['babel-preset-expo',
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
  plugins: [
    ["@babel/plugin-proposal-private-property-in-object", { "loose": true }]
  ]
};
