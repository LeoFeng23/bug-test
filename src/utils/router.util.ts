import { isApp } from '@/utils/env.util';
import Taro from '@tarojs/taro';
import { jumpNewPage, nativeBack } from './jsb.util';

// const judgeAuthor = (token: string): boolean => {
//   return false;
// };

// // 获取token
// export const getToken = (): string => {
//   if (isMiniApp()) {
//     return Taro.getStorageSync('token');
//   }
//   const system = useSystem();
//   return system.token;
// };


// 页面跳转的兼容操作，主要针对APP和小程序两个环境下的跳转操作
export const navigationPush = path => {
  // const token = getToken();
  // if (!token) {
  //   showToast('未登录，请登录后重试');
  //   return;
  // }
  // // 鉴权
  // const isAuth = judgeAuthor(token);
  // if (!isAuth) {
  //   return;
  // }
  // APP跳转
  if (isApp()) {
    jumpNewPage(path);
    return;
  }
  // 小程序&H5跳转逻辑
  Taro.navigateTo({ url: path });
};

// replace方式跳转
export const navigationReplace = path => {
  if (isApp()) {
    // APP跳转
    // TODO: 有关于replace的操作需要跟客户端聊一下
    jumpNewPage(path);
    return;
  }
  // 小程序&H5跳转逻辑
  Taro.redirectTo({ url: path });
};

// 返回上一页面
export const navigationBack = () => {
  // APP跳转
  if (isApp()) {
    nativeBack();
    return;
  }
  // 小程序&H5跳转逻辑
  Taro.navigateBack();
};
