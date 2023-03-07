
/**
 * 应用类型
 */
export const APP_TYPE = {
  DD: 'dd',
  WX: 'weapp',
  FS: 'lark',
  H5: 'h5',
};

export const ENV_STORE_VALUE = {
  ONLINE: 'online',
  PRE: 'pre',
  TEST: 'test',
  AMBAK: 'ambak',
  DEV: 'dev',
};

/**
 * 是否是小程序
 * @returns Boolean
 */
export const isMiniApp = () => {
  return process.env.TARO_ENV !== APP_TYPE.H5;
};

/**
 * 是否是钉钉环境
 * @returns Boolean
 */
export const isDD = () => {
  return process.env.TARO_ENV === APP_TYPE.DD;
};

/**
 * 是否是微信环境
 * @returns Boolean
 */
export const isWeixin = () => {
  return process.env.TARO_ENV === APP_TYPE.WX;
};

/**
 * 是否是钉钉环境
 * @returns Boolean
 */
export const isApp = () => {
  return window.navigator.userAgent.includes('epandianapp=1');
};
