import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      showMenu: false,
      hideMenu: true
    },
    mutations: {
      showMenu(state) {
        state.showMenu = !state.showMenu,
        state.hideMenu = !state.hideMenu
      },
      hideMenu(state) {
        state.hideMenu = !state.hideMenu,
        state.showMenu = !state.showMenu,
        console.log(state.showMenu);
        console.log(state.hideMenu);
        
      }
    }
  })

export default store