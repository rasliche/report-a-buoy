import Vue from 'vue'
import Vuex from 'vuex'

import * as buoy from './modules/buoy'
import * as zone from './modules/zone'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    buoy,
    zone,
  }
})
