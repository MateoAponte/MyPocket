const state = {
    userData: {},
    iconsData: [
        {
            category: 'Casa',
            iconName: 'home',
            class: '#24C1FD',
            prefix: "fas"
        },
        {
            category: 'Servicios',
            iconName: 'lightbulb',
            class: '#FFBF53',
            prefix: "fas"
        },
        {
            category: 'Banco & Transacciones',
            iconName: 'money-bill-wave',
            class: '#12BB85',
            prefix: "fas"
        },
        {
            category: 'Comida',
            iconName: 'utensils',
            class: '#FD7E14',
            prefix: "fas"
        },
        {
            category: 'Tecnología',
            iconName: 'mobile-alt',
            class: '#BE4BDB',
            prefix: "fas"
        },
        {
            category: 'Viajes',
            iconName: 'plane',
            class: '#F963A0',
            prefix: "fas"
        },
        {
            category: 'Entretenimiento',
            iconName: 'gamepad',
            class: '#FF5154',
            prefix: "fas"
        },
        {
            category: 'Moda',
            iconName: 'tshirt',
            class: '#4C6EF5',
            prefix: "fas"
        }
    ],
    budgetData: {
        budget: 1900000,
        expenses: 0,
        percentil: 8
    },
    itemsData: [
        {
            "thing": "Universidad",
            "cost": "500000",
            "priority": "Alta",
            "date": "2019/11/25",
            "iconData": {
                "category": 'Tecnología',
                "name": 'mobile-alt',
                "class": '#BE4BDB'
            }
        }, {
            "thing": "Celular",
            "cost": "250000",
            "priority": "Alta",
            "date": "2019/11/25",
            "iconData": {
                "category": 'Banco & Transacciones',
                "name": 'money-bill-wave',
                "class": '#12BB85'
            }
        }, {
            "thing": "Bicicleta",
            "cost": "167000",
            "priority": "Alta",
            "date": "2019/11/25",
            "iconData": {
                "category": 'Banco & Transacciones',
                "name": 'money-bill-wave',
                "class": '#12BB85'
            }
        }, {
            "thing": "Comida",
            "cost": "100000",
            "priority": "Media",
            "date": "2019/11/26",
            "iconData": {
                "category": 'Comida',
                "name": 'utensils',
                "class": '#FD7E14'
            }
        }, {
            "thing": "Transporte",
            "cost": "80000",
            "priority": "Media",
            "date": "2019/11/26",
            "iconData": {
                "category": 'Viajes',
                "name": 'plane',
                "class": '#F963A0'
            }
        }, {
            "thing": "Canastas",
            "cost": "300000",
            "priority": "Alta",
            "date": "2019/11/26",
            "iconData": {
                "category": 'Comida',
                "name": 'utensils',
                "class": '#FD7E14'
            }
        }, {
            "thing": "Instituto",
            "cost": "150000",
            "priority": "Alta",
            "date": "2019/11/26",
            "iconData": {
                "category": 'Banco & Transacciones',
                "name": 'money-bill-wave',
                "class": '#12BB85'
            }
        }, {
            "thing": "Otros",
            "cost": "50000",
            "priority": "Baja",
            "date": "2019/11/27",
            "iconData": {
                "category": 'Comida',
                "name": 'utensils',
                "class": '#FD7E14'
            }
        }, {
            "thing": "Audifonos (Balaca)",
            "cost": "80000",
            "priority": "Media",
            "date": "2019/11/27",
            "iconData": {
                "category": 'Tecnología',
                "name": 'mobile-alt',
                "class": '#BE4BDB'
            }
        }, {
            "thing": "Audifonos (Balaca)",
            "cost": "80000",
            "priority": "Media",
            "date": "2019/11/27",
            "iconData": {
                "category": 'Moda',
                "name": 'tshirt',
                "class": '#4C6EF5'
            }
        }
    ]
}

const getters = {
    getIconData(state) {
        return state.iconsData;
    },
    getUserData(state) {
        return state.userData;
    },
    getBudgetData(state) {
        return state.budgetData;
    },
    getItemsData(state) {
        return _.cloneDeep(state.itemsData);
    }
}

const mutations = {
    setUserData(state, payload) {
        state.userData = payload;
    },
    setExpensesData(state, payload) {
        state.expensesData = payload;
    },
    setItemsData(state, payload) {
        state.itemsData = payload;
    }  
}

const actions = {
    updateUserData({ commit }, payload){
        commit("setUserData", payload)
    },
    updateExpensesData({ commit }, payload){
        commit("setExpensesData", payload)
    },
    updateItemsData({ commit, state }, payload){
        let items = _.cloneDeep(state.itemsData);
        items.unshift(payload);
        commit("setItemsData", items);
    },
    deleteItemsData({commit, state}, payload){
        let items = _.cloneDeep(state.itemsData);
        items.splice(payload, 1);
        commit("setItemsData", items);
    },
    checkedItemsData({commit, state}, payload){
        let items = _.cloneDeep(state.itemsData);
        items[payload].priority = "Check";
        commit("setItemsData", items);
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

