import { useSystem } from '@/stores';
import Taro from '@tarojs/taro';
import { showToast } from './common.util';
import { isMiniApp } from './env.util';

// 验证是否登录
const judgeAuthor = (token: string): boolean => {
  return false;
};

// 获取token
export const getToken = (): string => {
  if (isMiniApp()) {
    return Taro.getStorageSync('token');
  }
  const system = useSystem();
  return system.token;
};

// 页面跳转的兼容操作，主要针对APP和小程序两个环境下的跳转操作
export const navigationPush = path => {
  const token = getToken();
  if (!token) {
    showToast('未登录，请登录后重试')
    return
  }
  const isAuth = judgeAuthor(token)
  if (!isAuth) {
    return
  }
  // 小程序跳转逻辑
  if (isMiniApp()) {
    return Taro.navigateTo({ url: path });
  }
  // APP跳转
  // const bridge =
};

