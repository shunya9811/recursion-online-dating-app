import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users.js'
import messages from './modules/messages.js'


Vue.use(Vuex)
//stateを呼び出す時は this.$store.state.モジュール名.propety
//dispatchによって〇〇処理を実行したい場合はdispatch(‘モジュール名/〇〇’)
//これはnamespacedを設定しているから していないならdispatch(‘〇〇’)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    users,
    messages
  }
})
