import { defineStore } from 'pinia';

export interface Options {
  path: string;
  scene: number;
  query: object;
  shareTicket: string;
  referrerInfo: object;
}

const useSystem = defineStore({
  /** 区分不通状态的唯一标识 */
  id: 'system',
  /** 状态 */
  state: () => ({
    options: {} as Options,
    token: ''
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
