import ColumnStyle from '../model/ColumnStyle';

export class ColumnProperties {
  required: boolean; /** 是否必须 */
  label: string; /** label */
  placeholder: string; /** placeholder */
  tooltip: string; /** tooltip */
  defaultValue:
    | string
    | string[]
    | 'NOW'
    | ReturnType<Date['toISOString']>
    | null; /** defaultValue 时间类型比较特殊 */
  style: ColumnStyle; /** style */
  itemDisabled: boolean; /** disabled */
  // labeltip: string /** label的提示信息，一般情况下是空*/

  constructor(properties) {
    this.required = properties.required || false;
    this.label = properties.label || '';
    this.placeholder = properties.placeholder || '';
    this.tooltip = properties.tooltip || '';
    this.defaultValue = properties.defaultValue || '';
    this.style = new ColumnStyle(properties.style || {});
    this.itemDisabled = properties.itemDisabled || false;
    // this.labeltip = properties.labeltip || '';

    this.resetStyle();
  }

  resetStyle() {
    if (this.style.span === 1) {
      this.style.style['grid-column'] = '1 / -1';
    } else {
      this.style.style['grid-column'] = 'auto / span 1';
    }
  }
}
export default ColumnProperties;
