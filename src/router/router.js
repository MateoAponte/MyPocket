import Vue from 'vue';
import Router from "vue-router";
import common from '@Views/common/common'

Vue.use(Router)

export default new Router ({
    routes: [
        {
            path: '/',
            name: 'common',
            component: common
        },
    ]
})