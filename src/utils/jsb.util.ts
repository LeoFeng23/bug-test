// 设置标题页面
export const setNavBarTitle = title => {
  window.WebViewJavascriptBridge?.callHandler?.('setNavBarTitle', { title });
};

// 返回上一页
export const nativeBack = () => {
  window.WebViewJavascriptBridge?.callHandler('nativeBack');
};

// 设置上传图片类型（拍照、从相册选取）
export const changeUploadImgType = () => {
  window.WebViewJavascriptBridge?.callHandler(
    'changeUploadImgType',
    { type: ['camera'] },
  );
};

// 扫码
export const scan = callback => {
  window.WebViewJavascriptBridge?.callHandler('scan', callback || function () {});
};

// 获取token
export const getNativeToken = callback => {
  window.WebViewJavascriptBridge?.callHandler('getToken', callback || function () {});
};

// 跳转页面
export const jumpNewPage = url => {
  window.WebViewJavascriptBridge?.callHandler('jumpNewPage', { url });
};
