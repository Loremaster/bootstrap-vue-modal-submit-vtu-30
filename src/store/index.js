import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    createReminder ({}, message) {
      console.log(`creating reminder: ${message}`)
    }
  },
  modules: {}
});
