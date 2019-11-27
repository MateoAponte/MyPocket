import Vue from 'vue';
import Router from "vue-router";
import Common from '@Views/common/Common'
import Finance from '@Views/finance/Finance'
import Login from '@Views/userAdmin/Login'
import Registrer from '@Views/userAdmin/Registrer'
import Confirmation from '@Views/userAdmin/Confirmation'
import Configuration from '@Views/config/Configuration'

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
            path: '/confirmation',
            name: 'confirmation',
            component: Confirmation
        },
        {
            path: '/configuration',
            name: 'configuration',
            component: Configuration
        }
    ]
})