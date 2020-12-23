import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

//将顶部通知栏的高度挂载全局⽤
Vue.prototype.$statusBarHeight = uni.getSystemInfoSync().statusBarHeight;

//引入icon组件
import icon from "./components/icon/icon.vue"
//全局注册icon组件
Vue.component("myIcon",icon)

const app = new Vue({
    ...App
})
app.$mount()
