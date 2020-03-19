import Vue from 'vue';
import Router from "vue-router";
import Expenses from '@Views/finance/expenses/Expenses'
import Earnings from '@Views/finance/earnings/Earnings'
import userAdmin from '@Views/userAdmin/userAdmin'
import Configuration from '@Views/userAdmin/Configuration'
import Summary from '@Views/summary/Summary'
import iconsConfig from '@Views/icons/iconsConfig'
import GenericReport from '@Views/report/generic/genericReport'

Vue.use(Router)

export default new Router ({
    routes: [
        {
            path: '/',
            name: 'userAdmin',
            component: userAdmin
        },
        {
            path: '/finance/expenses',
            name: 'expenses',
            component: Expenses
        },
        {
            path: '/finance/earnings',
            name: 'earnings',
            component: Earnings
        },
        {
            path: '/summary',
            name: 'summary',
            component: Summary
        },
        {
            path: '/icons',
            name: 'iconsConfig',
            component: iconsConfig
        },
        {
            path: '/configuration',
            name: 'configuration',
            component: Configuration
        },
        {
            path: '/genericReport',
            name: 'genericReport',
            component: GenericReport
        }
    ]
})