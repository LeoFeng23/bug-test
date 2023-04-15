// url:https://taro-docs.jd.com/docs/app-config
import Taro from '@tarojs/taro';

declare const defineAppConfig: (config: Taro.Config) => Taro.Config;

export default defineAppConfig({
  pages: [
    'pages/common/loading/index',
  ],
  window: {
    backgroundColor: '#fff',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '易',
    navigationBarTextStyle: 'black',
  },
});
