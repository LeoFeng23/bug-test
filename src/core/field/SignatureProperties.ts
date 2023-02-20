import ColumnProperties from './ColumnProperties';
import ColumnStyle from '../model/ColumnStyle';

/** 签字框 */
export default class SignatureProperties extends ColumnProperties {
  constructor(params) {
    super(params);
    this.style = new ColumnStyle(
      params.style || {
        span: 1,
        labelWidth: 120,
      }
    );
  }
}
