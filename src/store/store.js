import common from '@Store/common/common';
import finance from '@Store/finance/finance';
import login from '@Store/userAdmin/login';
import register from '@Store/userAdmin/registrer';

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        common,
        finance,
        login,
        register
    }
})