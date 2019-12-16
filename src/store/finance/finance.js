const state = {
    userData: {},
    iconsData: {
        iconSection1: [
            {
                category: 'Casa',
                name: 'home',
                class: 'home-icon'
            },
            {
                category: 'Servicios',
                name: 'lightbulb',
                class: 'energy-icon'
            },
            {
                category: 'Banco & Transacciones',
                name: 'money-bill-wave',
                class: 'money-icon'
            },
            {
                category: 'Comida',
                name: 'utensils',
                class: 'food-icon'
            }
        ],
        iconSection2: [
            {
                category: 'Tecnología',
                name: 'mobile-alt',
                class: 'tecnology-icon'
            },
            {
                category: 'Viajes',
                name: 'plane',
                class: 'plane-icon'
            },
            {
                category: 'Entretenimiento',
                name: 'gamepad',
                class: 'game-icon'
            },
            {
                category: 'Moda',
                name: 'tshirt',
                class: 'clothes-icon'
            }
        ]
    },
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
            "date": "2019/11/27",
            "iconData": {
                "category": 'Tecnología',
                "name": 'mobile-alt',
                "class": 'tecnology-icon'
            }
        }, {
            "thing": "Celular",
            "cost": "250000",
            "priority": "Alta",
            "date": "2019/11/27",
            "iconData": {
                "category": 'Banco & Transacciones',
                "name": 'money-bill-wave',
                "class": 'money-icon'
            }
        }, {
            "thing": "Bicicleta",
            "cost": "167000",
            "priority": "Alta",
            "date": "2019/11/27",
            "iconData": {
                "category": 'Banco & Transacciones',
                "name": 'money-bill-wave',
                "class": 'money-icon'
            }
        }, {
            "thing": "Comida",
            "cost": "100000",
            "priority": "Media",
            "date": "2019/11/27",
            "iconData": {
                "category": 'Comida',
                "name": 'utensils',
                "class": 'food-icon'
            }
        }, {
            "thing": "Transporte",
            "cost": "80000",
            "priority": "Media",
            "date": "2019/11/27",
            "iconData": {
                "category": 'Viajes',
                "name": 'plane',
                "class": 'plane-icon'
            }
        }, {
            "thing": "Canastas",
            "cost": "300000",
            "priority": "Alta",
            "date": "2019/11/27",
            "iconData": {
                "category": 'Comida',
                "name": 'utensils',
                "class": 'food-icon'
            }
        }, {
            "thing": "Instituto",
            "cost": "150000",
            "priority": "Alta",
            "date": "2019/11/27",
            "iconData": {
                "category": 'Banco & Transacciones',
                "name": 'money-bill-wave',
                "class": 'money-icon'
            }
        }, {
            "thing": "Otros",
            "cost": "50000",
            "priority": "Baja",
            "date": "2019/11/27",
            "iconData": {
                "category": 'Comida',
                "name": 'utensils',
                "class": 'food-icon'
            }
        }, {
            "thing": "Audifonos (Balaca)",
            "cost": "80000",
            "priority": "Media",
            "date": "2019/11/27",
            "iconData": {
                "category": 'Tecnología',
                "name": 'mobile-alt',
                "class": 'tecnology-icon'
            }
        }, {
            "thing": "Audifonos (Balaca)",
            "cost": "80000",
            "priority": "Media",
            "date": "2019/11/27",
            "iconData": {
                "category": 'Moda',
                "name": 'tshirt',
                "class": 'clothes-icon'
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
        return state.itemsData;
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
        let items = state.itemsData;
        items.push(payload);
        commit("setItemsData", items)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

