import Vue from 'vue';
import App from 'Views/App';
import router from 'Router/router';
import store from 'Store/store';

window.eventBus = new Vue();
Vue.config.productionTip = false;

window.app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')