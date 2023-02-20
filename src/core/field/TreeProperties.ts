import ColumnProperties from './ColumnProperties';

/** 树形 */
export default class TreeProperties extends ColumnProperties {
  multiple: boolean; /** 是否支持多选 */
  dataSource: string[] | string; /** 选项值(string[])/数据源(string) */
  dataSourceEmptyTooltip: string; /** 数据源没有值提示 */

  constructor(params) {
    super(params);
    this.multiple = params.multiple || false;
    this.dataSource = params.dataSource ? params.dataSource : [];
    this.defaultValue = params.defaultValue ? params.defaultValue : params.multiple ? [] : '';
    this.dataSourceEmptyTooltip = params.dataSourceEmptyTooltip || '';
  }
}
