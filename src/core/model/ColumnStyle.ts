/**
 * 字段样式
 */
import { CSSProperties } from 'vue';
type StyleSpan = -1 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type StylelabelAlign = 'left' | 'right' | 'center';

export const DEFAULT_COLUMN_STYLE = {
  labelWidth: 120,
  span: -1,
  style: {
    minWidth: '120px',
  },
  labelAlign: 'left',
  labelColor: '',
  valueColor: 'inherit',
};
class ColumnStyle {
  style: CSSProperties; /** 表单字段项的行内样式 */
  span: StyleSpan; /** 所占多少列; -1代表整行, 默认是 1 列 */
  labelWidth: number; /** 标签名宽度, 默认是100px */
  labelAlign: StylelabelAlign; /** 标签对齐样式 默认left */
  labelColor: CSSProperties['color']; /** 标签颜色 */
  valueColor: CSSProperties['color']; /** 值颜色 */

  constructor(columnStyle = DEFAULT_COLUMN_STYLE) {
    this.style = columnStyle.style || {};
    this.span = columnStyle.span as StyleSpan || -1;
    this.labelWidth = columnStyle.labelWidth || 120;
    this.labelAlign = columnStyle.labelAlign as StylelabelAlign || 'left';
    this.labelColor = columnStyle.labelColor || '';
    this.valueColor = columnStyle.valueColor || 'inherit';
  }
}
export default ColumnStyle;
