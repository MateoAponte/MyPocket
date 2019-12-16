import Vue from 'vue';
import Router from "vue-router";
import Common from '@Views/common/Common'
import Finance from '@Views/finance/Finance'
import Login from '@Views/userAdmin/Login'
import Registrer from '@Views/userAdmin/Registrer'
import Configuration from '@Views/config/Configuration'
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
            path: '/login',
            name: 'finance',
            component: Login
        },
        {
            path: '/registrer',
            name: 'registrer',
            component: Registrer
        },
        {
            path: '/configuration',
            name: 'configuration',
            component: Configuration
        }
    ]
})