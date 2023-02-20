import ColumnProperties from '../field/ColumnProperties';
import { fieldPropertiesMap, FormFieldType } from '../configMap';

class FormField {

  // 字段属性控制
  formFieldProperties: ColumnProperties;
  // 字段code
  formItemCode: string;
  // 字段类型
  formFieldType: FormFieldType;
  // 字段的值
  value: any;
  // 字段自定义配置
  config?: any

  constructor(item, formItemConfig) {
    this.formItemCode = item.formItemCode
    this.formFieldType = item.formFieldType
    const PropertiesClass = fieldPropertiesMap(item.formFieldType)
    this.formFieldProperties = new PropertiesClass(item.formFieldProperties)
    this.config = formItemConfig
  }

  validate() {
    return {
      formItemCode: this.formItemCode,
      errorMsg: '',
    };
  }
}

export default FormField;
