import { defineStore } from "pinia";

export const useGeneralStore = defineStore("general", {
  state: () => ({
    isDarkMode: false
  }),
  getters: {},
  actions: {}
});
