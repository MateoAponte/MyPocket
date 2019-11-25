import Vue from 'vue';
import Router from "vue-router";
import common from '@Views/common/common'
import finance from '@Views/finance/finance'

Vue.use(Router)

export default new Router ({
    routes: [
        {
            path: '/',
            name: 'common',
            component: common
        },
        {
            path: '/finance',
            name: 'finance',
            component: finance
        },
    ]
})