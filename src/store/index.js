/**
 * Created by asus on 2017/3/29.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

Vue.use(Vuex)

const state = {
  isFixedHeader: false,
  isShowSearchBar: false,
  isShowMask: false,
  sliders: [],
  hotProducts: [],
  hotShops: [],
  products:[],
  num: 5,
  busy: false,
  isShowLoadingTips: false,
  isShowLoadedTips: false
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
