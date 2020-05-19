// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 按需引入element ui
import { Icon, Button, Menu, MenuItem, Dialog, Radio, RadioGroup, Card, Backtop, 
  Select, Input, Col, Row, Tooltip, Table, TableColumn } from 'element-ui';
Vue.use(Icon);
Vue.use(Button);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Dialog);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Card);
Vue.use(Backtop);
Vue.use(Select);
Vue.use(Input);
Vue.use(Col);
Vue.use(Row);
Vue.use(Tooltip);
Vue.use(Table);
Vue.use(TableColumn);



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
