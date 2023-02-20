import { createApp } from 'vue';
import { setupStore, useSystem } from '@/stores';

import '@nutui/nutui-taro/dist/style.css';
import './app.scss';

const App = createApp({
  // 可以使用所有的 Vue 生命周期方法
  // 对应 onLaunch
  onLaunch(options) {
    // 将启动参数放进到全局去
    const system = useSystem();
    system.init(options);
  },

  // 对应 onShow
  onShow(options) {
  },
});


// 启用pinia
setupStore(App);

export default App;
