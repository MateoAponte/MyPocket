const state = {
    data: {},
    calculator: false,
    modalData: {
        type: "",
        action: "",
        subject: "",
        title: "",
        injectData: {}
    },
    personalData: {
        userData: {
            name: "Mateo",
            lastname: "Aponte Murcia",
            email: "mateo2aponte@hotmail.com",
            office: "worker",
            entryCost: "monthly"
        },
        budgetData: {
            budget: 1900000,
            expenses: 0,
            percentil: 8
        }
    },
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
    itemsData: [
        {
            "thing": "Universidad",
            "cost": "500000",
            "priority": "Alta",
            "date": "2019/11/25",
            "iconData": {
                "category": 'Tecnología',
                "iconName": 'mobile-alt',
                "class": '#BE4BDB',
                'prefix': 'fas'
            }
        }, {
            "thing": "Celular",
            "cost": "250000",
            "priority": "Alta",
            "date": "2019/11/25",
            "iconData": {
                "category": 'Banco & Transacciones',
                "iconName": 'money-bill-wave',
                "class": '#12BB85',
                'prefix': 'fas'
            }
        }, {
            "thing": "Bicicleta",
            "cost": "167000",
            "priority": "Alta",
            "date": "2019/11/25",
            "iconData": {
                "category": 'Banco & Transacciones',
                "iconName": 'money-bill-wave',
                "class": '#12BB85',
                'prefix': 'fas'
            }
        }, {
            "thing": "Comida",
            "cost": "100000",
            "priority": "Media",
            "date": "2019/11/26",
            "iconData": {
                "category": 'Comida',
                "iconName": 'utensils',
                "class": '#FD7E14',
                'prefix': 'fas'
            }
        }, {
            "thing": "Transporte",
            "cost": "80000",
            "priority": "Media",
            "date": "2019/11/26",
            "iconData": {
                "category": 'Viajes',
                "iconName": 'plane',
                "class": '#F963A0',
                'prefix': 'fas'
            }
        }, {
            "thing": "Canastas",
            "cost": "300000",
            "priority": "Alta",
            "date": "2019/11/26",
            "iconData": {
                "category": 'Comida',
                "iconName": 'utensils',
                "class": '#FD7E14',
                'prefix': 'fas'
            }
        }, {
            "thing": "Instituto",
            "cost": "150000",
            "priority": "Alta",
            "date": "2019/11/26",
            "iconData": {
                "category": 'Banco & Transacciones',
                "iconName": 'money-bill-wave',
                "class": '#12BB85',
                'prefix': 'fas'
            }
        }, {
            "thing": "Otros",
            "cost": "50000",
            "priority": "Baja",
            "date": "2019/11/27",
            "iconData": {
                "category": 'Comida',
                "iconName": 'utensils',
                "class": '#FD7E14',
                'prefix': 'fas'
            }
        }, {
            "thing": "Audifonos (Balaca)",
            "cost": "80000",
            "priority": "Media",
            "date": "2019/11/27",
            "iconData": {
                "category": 'Tecnología',
                "iconName": 'mobile-alt',
                "class": '#BE4BDB',
                'prefix': 'fas'
            }
        }, {
            "thing": "Audifonos (Balaca)",
            "cost": "80000",
            "priority": "Media",
            "date": "2019/11/27",
            "iconData": {
                "category": 'Moda',
                "iconName": 'tshirt',
                "class": '#4C6EF5',
                'prefix': 'fas'
            }
        }
    ],
}

const getters = {}

const mutations = {
    setCalculator(state, payload){
        state.calculator = payload;
    },
    setUserData(state, payload){
        state.data = payload;
    },
    setModalData(state, payload){
        state.modalData = payload;
    },
    setIconsData(state, payload){
        state.iconsData = payload;
    },
    setItemsData(state, payload){
        state.itemsData = payload;
    },
    setPersonalData(state, payload){
        state.personalData = payload;
    }
}

const actions = {
    updateCalculator({ commit }, payload){
        commit("setCalculator", payload);
    },
    updateUserData({ commit }, payload){
        commit('setUserData', payload);
    },
    updateModalData({ commit }, payload){
        commit('setModalData', payload);
    },
    updateIconsData({ commit, state }, payload){
        let icons = _.cloneDeep(state.iconsData);
        icons.unshift(payload);
        commit('setIconsData', icons);
    },   
    updateItemsData({ commit, state }, payload){
        let item = _.cloneDeep(state.itemsData);
        item.unshift(payload);
        commit('setItemsData', item);
    },   
    updateItem({ commit, state }, payload){
        let item = _.cloneDeep(state.itemsData);
        item.splice(payload.index, 1, payload.data);
        commit('setItemsData', item);
    },
    updatePersonalData({ commit, state }, payload){
        let item = _.cloneDeep(state.personalData);
        item.userData = payload.userData;
        item.budgetData = payload.budgetData;
        commit('setPersonalData', item);
    }   
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}