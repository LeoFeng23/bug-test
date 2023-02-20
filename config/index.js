import Components from 'unplugin-vue-components/webpack';
const path = require('path');
const args = process.argv;
const isOpenDevTools = args.includes('--devtools');

const outputRootStrtegy = {
  h5: 'dist/h5',
  weapp: 'dist/weixin',
  dd: 'dist/dingding',
  lark: 'dist/lark',
  ['undefined']: 'dist',
};
const env = process.env.npm_lifecycle_event.split(':')[1];
const outputRoot = outputRootStrtegy[env];

const NutUIResolver = () => {
  return name => {
    if (name.startsWith('Nut')) {
      const partialName = name.slice(3);
      return {
        name: partialName,
        from: '@nutui/nutui-taro',
        sideEffects: `@nutui/nutui-taro/dist/packages/${partialName.toLowerCase()}/style`,
      };
    }
  };
};

const pluginList = [
  '@tarojs/plugin-html',
  '@tarojs/plugin-platform-alipay-dd',
  '@tarojs/plugin-platform-lark',
  'taro-plugin-pinia',
];

if (isOpenDevTools) {
  pluginList.push('@tarojs/plugin-vue-devtools');
}

const config = {
  compiler: {
    type: 'webpack5',
    prebundle: { enable: false },
  },
  cache: {
    enable: false, // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  projectName: 'YpdMobile',
  date: '2023-01-05',
  designWidth: 375,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1,
  },
  sass: {
    resource: [path.resolve(__dirname, '..', 'src/assets/styles/custom_theme.scss')],
    // 默认京东 APP 10.0主题 > @import "@nutui/nutui-taro/dist/styles/variables.scss";
    // 京东科技主题 > @import "@nutui/nutui-taro/dist/styles/variables-jdt.scss";
    // 京东B商城主题 > @import "@nutui/nutui-taro/dist/styles/variables-jdb.scss";
    // 京东企业业务主题 > @import "@nutui/nutui-taro/dist/styles/variables-jddkh.scss";
    data: '@import "@nutui/nutui-taro/dist/styles/variables.scss";',
  },
  alias: {
    '@': path.resolve(__dirname, '..', 'src'),
  },
  sourceRoot: 'src',
  outputRoot,
  plugins: pluginList,
  defineConstants: {},
  copy: {
    patterns: [],
    options: {
      ignore: ['docs', 'CHANGELOG.md', 'README.md', 'CONTRIBUTING.md'], // 全局的 ignore
    },
  },
  framework: 'vue3',
  mini: {
    webpackChain(chain) {
      chain.plugin('unplugin-vue-components').use(
        Components({
          resolvers: [NutUIResolver()],
        })
      );
      chain.merge({
        module: {
          rule: [
            {
              test: /.js$/,
              loader: 'babel-loader',
            },
          ],
        },
      });
    },
    postcss: {
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
  h5: {
    webpackChain(chain) {
      chain.plugin('unplugin-vue-components').use(
        Components({
          resolvers: [NutUIResolver()],
        })
      );
    },
    publicPath: '/',
    staticDirectory: 'static',
    esnextModules: ['nutui-taro', 'icons-vue-taro'],
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
  optimization: {
    runtimeChunk: 'single',
  },
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }
  return merge({}, config, require('./prod'));
};
