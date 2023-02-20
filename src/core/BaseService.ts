import { HighConfig, OrderConfigType, SheetInfo, FormItemConfigMap } from './interface';
import { baseConfig } from './BaseConfig';
import FormGroup from './model/FormGroup';
import FormDetailGroup from './model/FormDetailGroup';
import { markRaw } from 'vue';

export class BaseService {
  formNo?: string | number;
  // 表单配置
  groupList: FormGroup[];
  // 表单明细配置
  detailList: FormDetailGroup[];
  // 高级设置
  highConfig: HighConfig;
  // 表单项自定义配置
  formItemConfigMap: FormItemConfigMap;

  constructor(sheetInfo: SheetInfo) {
    const formContent = sheetInfo.formContent;
    this.formNo = sheetInfo.formNo;
    this.formItemConfigMap = this.initConfig()
    this.groupList = this.initGroupList(formContent.formGroups);
    this.detailList = this.initDetailList(formContent.formDetailInfos);
  }

  // 初始化表单配置
  initGroupList(formGroups) {
    return formGroups.map(item => new FormGroup(item, this.formItemConfigMap));
  }

  // 初始化表单配置
  initDetailList(detailList) {
    return detailList.map(item => new FormDetailGroup(item, this.formItemConfigMap));
  }

  initConfig() {
    const originConfig = this.getConfig()
    return originConfig.formFieldList.reduce<FormItemConfigMap>((configMap, currentConfig) => {
      configMap[currentConfig.formItemCode] = {
        ...currentConfig,
        customComponent: markRaw(currentConfig.customComponent)
      }
      return configMap
    }, {})
  }

  getConfig(): OrderConfigType {
    return baseConfig;
  }



  // 表单校验
  async validate() {
    this.validateGroup();
    this.validateDetail();
  }

  async validateGroup() {}

  async validateDetail() {}
}
