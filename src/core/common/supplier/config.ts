import AdminField from '@/components/form/admin-field/index.vue';
import { OrderConfigType } from '@/core/interface';
import { baseConfig } from '../../BaseConfig';

export const supplierConfig: OrderConfigType = {
  ...baseConfig,
  assetFieldList: [],
  formFieldList: [
    {
      formItemCode: 'purchaseSheetStatus',
      customComponent: AdminField
    }
  ]
}
