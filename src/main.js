import Vue from 'vue';
import App from '@Views/App';
import router from '@Router/router';
import store from '@Store/store';
import { ValidationProvider, ValidationObserver, validate, extend, configure } from 'vee-validate';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import moment from 'moment';
import _ from 'lodash';
import numeral from 'numeral';
import is from 'is_js';
import axios from 'axios';

import ColorPicker from '@Components/common/colorPicker';
import toggleButton from '@Components/common/toggleButton';
import PieChart from '@Components/common/amCharts/pieChart';
import xAxisChart from '@Components/common/amCharts/xAxisChart';
import negativeAxisChart from '@Components/common/amCharts/negativeAxisChart';
import semiPieChart from '@Components/common/amCharts/semiPieChart';
import dropdownCategorys from "@Components/common/dropdownCategorys";
import vSelect from 'vue-select';
import datePicker from 'vue-date-pick';

import 'vue-select/dist/vue-select.css';
import 'vue-date-pick/dist/vueDatePick.css';


Vue.set(Vue.prototype, "moment", moment);
Vue.set(Vue.prototype, "_", _);
Vue.set(Vue.prototype, "numeral", numeral);
Vue.set(Vue.prototype, "is", is);
Vue.set(Vue.prototype, "axios", axios);
library.add(fas, fab);

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
            valid: value && value.match(/[0-9]/g) === null && value != false
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

extend('category', {
    validate(value){
        return {
            required: true,
            valid: value.iconName || value === {}
        }
    },
    message: "* Debe seleccionar una categoría",
    computesRequired: true
});

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ColorPicker', ColorPicker);
Vue.component('toggleButton', toggleButton);
Vue.component('PieChart', PieChart);
Vue.component('xAxisChart', xAxisChart);
Vue.component('dropdownCategorys', dropdownCategorys);
Vue.component('negativeAxisChart', negativeAxisChart);
Vue.component('datePicker', datePicker);
Vue.component('vSelect', vSelect);
Vue.component('semiPieChart', semiPieChart);

window.eventBus = new Vue();
Vue.config.productionTip = false;

window.app = new Vue({
    router,
    store,
    methods: {
        dimissModal(){
            document.querySelector(".overlay").classList.replace('show', 'hide');
        }
    },
    render: h => h(App)
}).$mount('#app')