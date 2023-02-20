import { ServiceMap } from './configMap';
import { SheetInfo } from './interface';

const createService = (sheetInfo: SheetInfo) => {
  const ServiceClass = ServiceMap[sheetInfo.formType];
  return new ServiceClass(sheetInfo)
};

export default createService
