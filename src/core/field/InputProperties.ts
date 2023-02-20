import ColumnProperties from './ColumnProperties';

/** 单行文本输入框 */
export default class InputProperties extends ColumnProperties {
  // pattern: string /** 校验的正则表达式 */
  patternType: 'mobile' | 'email' | 'url' | 'idcard'; /** 类型 */
  // dataSource: string | string[] /** 数据源, 用于实现输入联想功能 */
  maxLength: number; /** 最长长度 */

  constructor(params) {
    super(params);
    // this.pattern = params.pattern || '';
    this.patternType = params.patternType || null;
    // this.dataSource = params.dataSource || '';
    this.maxLength = params.maxLength || 50;
  }
}
