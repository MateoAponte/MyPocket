import Vue from 'vue';
import Router from "vue-router";
import Common from '@Views/common/Common'
import Finance from '@Views/finance/Finance'
import userAdmin from '@Views/userAdmin/userAdmin'
import Configuration from '@Views/userAdmin/Configuration'
import Summary from '@Views/summary/Summary'

Vue.use(Router)

export default new Router ({
    routes: [
        {
            path: '/',
            name: 'common',
            component: Common
        },
        {
            path: '/finance',
            name: 'finance',
            component: Finance
        },
        {
            path: '/summary',
            name: 'summary',
            component: Summary
        },
        {
            path: '/userAdmin',
            name: 'userAdmin',
            component: userAdmin
        },
        {
            path: '/configuration',
            name: 'configuration',
            component: Configuration
        }
    ]
})