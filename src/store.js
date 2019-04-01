import Vue from "vue";
import Vuex from "vuex";
import * as auth from "./services/AuthService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggerIn: false,
    apiUrl: "http://localhost:3000",
    username: null,
    userId: null
  },
  mutations: {
    authenticate(state) {
      state.isLoggerIn = auth.isLoggedIn();
      if (state.isLoggerIn) {
        state.username = auth.getUsername();
        state.userId = auth.getUserId();
      } else {
        state.userId = null;
        state.username = null;
      }
    }
  },
  actions: {
    authenticate(context) {
      context.commit("authenticate");
    }
  }
});
