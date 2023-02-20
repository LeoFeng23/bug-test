import ColumnProperties from './ColumnProperties';

/** 图片上传框 */
export default class ImageProperties extends ColumnProperties {
  maximum: number; /** 最大值, 包含 */
  minimum: number; /** 最小值, 包含 */
  // accept?: mimeType[] /** 支持的附件类型 */
  // album: boolean /** 支持相册 */
  // camera: boolean /** 支持相机 */
  // maxSize: number /** 最大文件大小 */
  // minSize: number /** 最小文件大小 */

  constructor(params) {
    super(params);
    this.maximum = params.maximum || 1;
    this.minimum = params.minimum;
  }
}
