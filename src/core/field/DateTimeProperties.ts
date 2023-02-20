import ColumnProperties from './ColumnProperties';

/** 日期时间选择框 */
export default class DateTimeProperties extends ColumnProperties {
  format:
    | 'YYYY-MM'
    | 'YYYY-MM-DD'
    | 'YYYY-MM-DD HH:mm'
    | 'YYYY-MM-DD HH:mm:ss'; /** 日期时间显示格式, 参考dayjs */
  // range: boolean // 暂时没用
  maximum: ReturnType<Date['toISOString']>;
  minimum: ReturnType<Date['toISOString']>;

  constructor(params) {
    super(params);
    this.format = params.format || 'YYYY-MM-DD';
    // this.range = typeof params.range === 'boolean' ? params.range : false;
    this.maximum = params.maximum || null;
    this.minimum = params.minimum || null;
    this.defaultValue = params.defaultValue || '';
  }
}
