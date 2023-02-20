import FormField from './FormField';

class FormGroup {
  // 分组名称
  groupName: string;

  groupItems: FormField[];

  constructor(group, formItemConfigMap) {
    this.groupName = group.groupName;
    this.groupItems = this.initGroupItems(group.groupItems, formItemConfigMap);
  }

  initGroupItems(groupItems, formItemConfigMap) {
    return groupItems
      .filter(item => {
        // TODO: 后选关于formItemType的判断改为泛型
        if (!item.isChoosed || Number(item.formItemType === 6)) {
          return false;
        }
        // TODO: 增加对表单样式的判断：详情 or 表单
        return true;
      })
      .map(item => {
        const formItemConfig = formItemConfigMap[item.formItemCode]
        return new FormField(item, formItemConfig)
      });
  }
}

export default FormGroup;
