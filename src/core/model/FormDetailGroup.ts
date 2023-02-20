import { FieldItem } from '../interface';
import FormField from './FormField';

class FormDetailGroup {
  detailName: string;

  // 明细单的表格结构，由于新增时实际的明细数量为0，所以先获取明细表单结构，添加明细时再创建实例
  detailItems: FieldItem[];

  constructor(detailInfo, formItemConfigMap) {
    this.detailName = detailInfo.detailName;
    this.detailItems = detailInfo.detailItems.filter(item => item.isChoosed).map(item => {
      const formItemConfig = formItemConfigMap[item.formItemCode]
      return new FormField(item, formItemConfig)
    })
  }
}

export default FormDetailGroup;
