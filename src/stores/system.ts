import { defineStore } from 'pinia';

export interface Options {
  path: string;
  scene: number;
  query: object;
  shareTicket: string;
  referrerInfo: object;
}

export enum ClientEnum {
  // 管理端
  MANAGE = 'manage',
  // 员工端
  EMPLOYEE = 'employee',
  // 未登录
  NONE = 'none'
}

const useSystem = defineStore({
  /** 区分不通状态的唯一标识 */
  id: 'system',
  /** 状态 */
  state: () => ({
    options: {} as Options,
    token: '',
    theme: 'light',
    clientType: ClientEnum.NONE
  }),
  actions: {
    init(options: Options) {
      this.options = options;
    },
    setToken(token: string) {
      this.token = token
    }
  },
});
export { useSystem };
