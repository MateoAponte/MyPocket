import common from '@Store/common/common';
import finance from '@Store/finance/finance';
import userAdmin from '@Store/userAdmin/userAdmin';

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        common,
        finance,
        userAdmin
    }
})