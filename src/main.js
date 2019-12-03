import Vue from 'vue';
import App from '@Views/App';
import router from '@Router/router';
import store from '@Store/store';
import { ValidationProvider, ValidationObserver, validate, extend, configure } from 'vee-validate';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import moment from 'moment';
import _ from 'lodash';
import numeral from 'numeral';
import is from 'is_js';

Vue.set(Vue.prototype, "moment", moment);
Vue.set(Vue.prototype, "_", _);
Vue.set(Vue.prototype, "numeral", numeral);
Vue.set(Vue.prototype, "is", is);
library.add(fas);

const config = {
    classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  },
  bails: true,
  skipOptional: true,
  mode: 'aggressive',
  useConstraintAttrs: true
}
configure(config);

extend('string', {
    validate(value){
        return {
            required: true,
            valid: value.match(/[0-9]/g) === null && value != false
        }
    },
    message: "* El campo {_field_} es incorrecto",
    computesRequired: true
});

extend('number', {
    validate(value){
        return {
            required: true,
            valid: value.match(/[a-zA-Z]|\s/g) === null && value != false
        }
    },
    message: "* El campo {_field_} es incorrecto",
    computesRequired: true
});

extend('password', {
    validate(value){
        return {
            required: true,
            valid: value.match(/\s/g) === null && value != false
        }
    },
    message: "* El campo {_field_} es incorrecto",
    computesRequired: true
});

extend('radio', {
    validate(value){
        return {
            required: true,
            valid: value != false
        }
    },
    message: "* El campo {_field_} no puede ir vacío",
    computesRequired: true
});

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

window.eventBus = new Vue();
Vue.config.productionTip = false;

window.app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')