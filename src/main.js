import Vue from 'vue';
import App from '@Views/App';
import router from '@Router/router';
import store from '@Store/store';

import moment from 'moment';
import _ from 'lodash';
import numeral from 'numeral';
import is from 'is_js';

Vue.set(Vue.prototype, "moment", moment);
Vue.set(Vue.prototype, "_", _);
Vue.set(Vue.prototype, "numeral", numeral);
Vue.set(Vue.prototype, "is", is);

window.eventBus = new Vue();
Vue.config.productionTip = false;

window.app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')