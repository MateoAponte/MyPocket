import common from '@Store/common/common';
import earnings from '@Store/finance/earnings/earnings';
import expenses from '@Store/finance/expenses/expenses';
import savings from '@Store/finance/savings/savings';
import userAdmin from '@Store/userAdmin/userAdmin';
import summary from '@Store/summary/Summary';
import icons from '@Store/icons/icons';
import generic from '@Store/report/generic/generic';
import comparation from '@Store/report/comparation/comparation';

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        common,
        earnings,
        expenses,
        savings,
        userAdmin,
        summary,
        icons,
        generic,
        comparation
    }
})