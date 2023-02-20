import { supplierConfig } from './config';
import { BaseService } from '../../BaseService';

export class SupplierSerive extends BaseService {
  constructor(formContent) {
    super(formContent);
    // this.config = supplierConfig
  }
  getConfig() {
    return supplierConfig
  }
}
