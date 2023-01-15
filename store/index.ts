import { defineStore } from "pinia";

export const useReportsStore = defineStore("reports", {
  state: () => {
    return {
      reports: [],
    };
  },
  actions: {},
  getters: {},
});
