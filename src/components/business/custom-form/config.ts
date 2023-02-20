import { FormFieldType } from '@/core/configMap';
import { InputField, InputNumberField, TextareaField } from '@/components/form';

export const getDefaultFormFieldMap = (formFieldType: FormFieldType) => {
  switch (formFieldType) {
    case FormFieldType.TABLE_IMAGE:
    case FormFieldType.IMAGE:
    case FormFieldType.TABLE_ATTACHMENT:
    case FormFieldType.ATTACHMENT:
    case FormFieldType.INPUT:
      return InputField;
    case FormFieldType.INPUT_NUMBER:
      return InputNumberField;
    case FormFieldType.SELECT:
      return InputField;
    case FormFieldType.TEXTAREA:
      return TextareaField;
    case FormFieldType.SIGNATURE:
    default:
      return InputField;
  }
};
