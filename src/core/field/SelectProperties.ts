import ColumnProperties from './ColumnProperties';

/** 下拉框 */
export default class SelectProperties extends ColumnProperties {
  multiple: boolean; /** 是否支持多选 */
  dataSource: string[] | string; /** 选项值(string[])/数据源(string) */
  dataSourceEmptyTooltip: string; /** 数据源没有值提示 */
  collapsed: boolean; /** 排列模式: true: 下拉选择; false: 单选框组 */

  constructor(params) {
    super(params);
    this.multiple = params.multiple || false;
    this.dataSource = params.dataSource ? params.dataSource : [];
    this.defaultValue = params.defaultValue ? params.defaultValue : params.multiple ? [] : '';
    this.dataSourceEmptyTooltip = params.dataSourceEmptyTooltip || '';
    this.collapsed = typeof params.collapsed === 'boolean' ? params.collapsed : true;
  }
}
