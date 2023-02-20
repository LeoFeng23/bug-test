/*GroupStyle*/
interface GroupStyle {
  itemLabelWidth: number;
  itemWidth: number;
  itemColumn: number;
  style: Record<string, string>;
  type: string;
}

/*Style*/
interface Style {
  labelAlign: string;
  style: Record<string, string>;
  labelWidth: number;
  labelColor: string;
  span: number;
  valueColor: string;
}

/*FormFieldProperties*/
export interface FormFieldProperties {
  label: string;
  required: boolean;
  itemDisabled: boolean;
  defaultValue: string;
  placeholder: string;
  tooltip: string;
  multiple: boolean;
  collapsed: boolean;
  dataSource: Record<string, unknown>;
  dataSourceEmptyTooltip: string;
  isPrint: boolean;
  style: Style;
}

/*GroupItems*/
export interface FieldItem {
  formItemCode: string;
  formItemDisplayCode: string;
  formFieldType: string;
  formItemType: number;
  formItemProperties: string;
  formFieldProperties: FormFieldProperties;
  formItemStyle: string;
  displayDetail: string;
  displaySumary: string;
  formItemRdType: number;
  isChoosed: boolean;
}

/*FormGroups*/
interface FormGroups {
  groupName: string;
  groupStyle: GroupStyle;
  groupItems: FieldItem[];
  groupModel: number;
  formGroupComponentType: number;
  groupDescription: string;
  isPrimary: boolean;
}

/*FormDetailInfos*/
interface FormDetailInfos {
  detailName: string;
  detailItems: FieldItem[];
}

/*FormContent*/
interface FormContent {
  formGroups: FormGroups[];
  formDetailInfos: FormDetailInfos[];
}

/*PrintConfig*/
interface PrintConfig {
  printWay: number;
  isContainApproval: number;
}

/*ApplyNotice*/
interface ApplyNotice {
  isOn: number;
  agreeStyle: number;
  title: string;
  content: string;
}

/*ActionConfig*/
interface ActionConfig {
  selectMaterial: boolean;
  scanCode: boolean;
}

/*HighConfig*/
export interface HighConfig {
  printConfig: PrintConfig;
  applyNotice: ApplyNotice;
  actionConfig: ActionConfig;
}

export interface SheetInfo {
  formNo: string;
  formSysName: string;
  formAliasName: string;
  formType: number;
  scopeConfigList: string;
  formContent: FormContent;
  highConfig: HighConfig;
  curUser: string;
  cdate: string;
  mdate: string;
  operatorId: number;
  operator: string;
  mainCodes: string[];
  itemCodes: string[];
}


export interface FormItemConfig {
  formItemCode: string;
  customComponent?: any;
  watch?: {
    fields: string[];
    callback: () => void
  }
}

export interface OrderConfigType {
  assetFieldList: []
  formFieldList: FormItemConfig[]
};

export type FormItemConfigMap = Record<string, FormItemConfig>
