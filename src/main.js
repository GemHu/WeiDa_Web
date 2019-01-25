// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import LeftBar from './components/LeftBar'
// import TopBar from './components/TopBar'
// import LabelContainer from './components/LabelContainer'

Vue.config.productionTip = false

// // 注册全局组件
// Vue.components("leftbar", LeftBar);
// Vue.components("topbar", TopBar);
// Vue.components("labelcontainer", LabelContainer);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
