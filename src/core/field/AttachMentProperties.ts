import ColumnProperties from './ColumnProperties';

export type mimeType =
  | 'image'
  | 'video'
  | 'pdf'
  | 'word'
  | 'excel'
  | 'ppt'
  | 'text'
  | 'zip'
  | 'image/png'
  | 'image/png';
/** 图片上传框 */
export default class AttachMentProperties extends ColumnProperties {
  maximum: number; /** 最大值, 包含 */
  minimum: number; /** 最小值, 包含 */
  // accept?: mimeType[] /** 支持的附件类型 */
  // mimeType?: string | string[] /** MIME type类型 application/json 格式 */
  // maxSize: number /** 最大文件大小 */
  // minSize: number /** 最小文件大小 */

  constructor(params) {
    super(params);
    this.maximum = params.maximum || 1;
    this.minimum = params.minimum;
  }
}
