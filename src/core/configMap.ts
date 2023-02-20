import { BaseService } from './BaseService';
import AttachMentProperties from './field/AttachMentProperties';
import ColumnProperties from './field/ColumnProperties';
import ImageProperties from './field/ImageProperties';
import InputNumberProperties from './field/InputNumberProperties';
import InputProperties from './field/InputProperties';
import SelectProperties from './field/SelectProperties';
import SignatureProperties from './field/SignatureProperties';
import TextAreaProperties from './field/TextAreaProperties';
import { SupplierSerive } from './common/supplier/SupplierService';

export const ServiceMap: Record<number, typeof BaseService> = {
  20: SupplierSerive,
};

export enum FormFieldType {
  INPUT = 'input',
  INPUT_NUMBER = 'inputNumber',
  SELECT = 'select',
  TEXTAREA = 'textarea',
  TREE = 'tree',
  DATE_TIME = 'datetime',
  IMAGE = 'image',
  ATTACHMENT = 'attachment',
  SIGNATURE = 'signature',
  TABLE_IMAGE = 'tableImage',
  TABLE_ATTACHMENT = 'tableAttachment',
}

export const fieldPropertiesMap = (formFieldType: FormFieldType) => {
  switch (formFieldType) {
    case FormFieldType.TABLE_IMAGE:
    case FormFieldType.IMAGE:
      return ImageProperties;
    case FormFieldType.TABLE_ATTACHMENT:
    case FormFieldType.ATTACHMENT:
      return AttachMentProperties;
    case FormFieldType.INPUT:
      return InputProperties;
    case FormFieldType.INPUT_NUMBER:
      return InputNumberProperties;
    case FormFieldType.SELECT:
      return SelectProperties;
    case FormFieldType.TEXTAREA:
      return TextAreaProperties;
    case FormFieldType.SIGNATURE:
      return SignatureProperties;
    default:
      return ColumnProperties;
  }
};
