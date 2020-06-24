import Vue from 'vue'
import { sync } from 'vuex-router-sync'

// Components
import './components'

// Plugins
import './plugins'
import i18n from './plugins/i18n'

import App from './App'
import router from './route'
import store from './store'

import '../common/error'

import bindkey from './config/bindkey'

sync(store, router)

window.eventHub = new Vue()

bindkey()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  el: '#root',
  render: h => h(App),
})
