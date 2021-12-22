module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'content': '@/components/content',
        'common': '@/components/common',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views',
        'layout':'@/layout',
        'mixin' : '@/mixin',
        'utils' : '@/utils',
        'player' : '@/player'
      }
    }
  },
  pwa: {
    iconPaths: {
        favicon32: 'yinle.svg',
        favicon16: 'yinle.svg',
        appleTouchIcon: 'yinle.svg',
        maskIcon: 'yinle.svg',
        msTileImage: 'yiunle.svg'
    }
}

}