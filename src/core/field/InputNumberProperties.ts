import ColumnProperties from './ColumnProperties';

/** 数字输入框 */
export default class InputNumberProperties extends ColumnProperties {
  thousands: boolean; /** 是否显示千分位分隔符 */
  unit: string; /** 单位 */
  maximum: number; /** 最大值, 包含 */
  minimum: number; /** 最小值, 包含 */
  precision: number; /** 小数位(数据精度) */

  constructor(params) {
    super(params);
    this.thousands = params.thousands || false;
    this.unit = params.unit || '';
    this.maximum = params.maximum;
    this.minimum = params.minimum;
    this.precision = params.precision || 0;
  }
}
