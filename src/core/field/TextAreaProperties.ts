import ColumnProperties from './ColumnProperties';

/** 多行文本输入框 */
export default class TextAreaProperties extends ColumnProperties {
  maxLength: number; /** 最长长度 */

  constructor(params) {
    super(params);
    this.maxLength = params.maxLength || 500;
  }
}
