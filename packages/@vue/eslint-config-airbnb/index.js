module.exports = {
  extends: [
    require.resolve('eslint-config-airbnb-base')
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: require.resolve('@vue/cli-service/webpack.config.js')
      }
    }
  }
}
