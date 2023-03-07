import Taro from '@tarojs/taro';
import { isApp } from './env.util';
import { setNavBarTitle } from './jsb.util';

export const setTitle = (title: string) => {
  if (isApp()) {
    setNavBarTitle(title);
    return;
  }
  // TODO: 酷应用设置标题
  Taro.setNavigationBarTitle({ title });
};

// 兼容Taro自带toast方法在H5环境下默认展示success图标的问题
export const showToast = (
  text: string,
  duration = 1000,
  icon: 'none' | 'success' | 'error' | 'loading' | undefined = 'none'
) => {
  Taro.showToast({ title: text, duration, icon });
};

// 获取dom元素数据
export const getDomInfo = (selector: string): Promise<DOMRect[]> =>
  new Promise(resolve => {
    // 使用setTimeout包裹是因为飞书和微信环境下在useReady中无法直接查询
    setTimeout(() => {
      const query = Taro.createSelectorQuery();
      if (typeof selector === 'string') {
        query.select(selector).boundingClientRect().exec(resolve);
      }
    });
  });
