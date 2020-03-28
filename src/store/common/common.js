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
            prefix: "fas",
            type: "expense"
        },
        {
            category: 'Libreta Militar',
            iconName: 'book-open',
            class: '#54C168',
            prefix: "fas",
            type: "saving"
        },
        {
            category: 'Servicios',
            iconName: 'lightbulb',
            class: '#FFBF53',
            prefix: "fas",
            type: "expense"
        },
        {
            category: 'Banco & Transacciones',
            iconName: 'money-bill-wave',
            class: '#12BB85',
            prefix: "fas",
            type: "expense"
        },
        {
            category: 'Comida',
            iconName: 'utensils',
            class: '#FD7E14',
            prefix: "fas",
            type: "expense"
        },
        {
            category: 'Tecnología',
            iconName: 'mobile-alt',
            class: '#BE4BDB',
            prefix: "fas",
            type: "expense"
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
            prefix: "fas",
            type: "expense"
        },
        {
            category: 'Moda',
            iconName: 'tshirt',
            class: '#4C6EF5',
            prefix: "fas",
            type: "expense"
        },
        {
            category: 'Trabajo',
            iconName: 'mouse-pointer',
            class: '#07D6BD',
            prefix: "fas",
            type: "earning"
        },
        {
            category: 'Cadenas',
            iconName: 'money-check-alt',
            class: '#DC90EE',
            prefix: "fas",
            type: "earning"
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
                'prefix': 'fas',
                'type': 'expense'
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
                'prefix': 'fas',
                'type': 'expense'
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
                'prefix': 'fas',
                'type': 'expense'
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
                'prefix': 'fas',
                'type': 'expense'
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
                'prefix': 'fas',
                'type': 'expense'
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
                'prefix': 'fas',
                'type': 'expense'
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
                'prefix': 'fas',
                'type': 'expense'
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
                'prefix': 'fas',
                'type': 'expense'
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
                'prefix': 'fas',
                'type': 'expense'
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
                'prefix': 'fas',
                'type': 'expense'
            }
        }
    ],
    earningData: [
        {
            "thing": "Trabajo",
            "cost": "2500000",
            "date": "2019/08/23",
            "percent": "8",
            "iconData": {
                "category": 'Trabajo',
                "iconName": 'mouse-pointer',
                "class": '#07D6BD',
                'prefix': 'fas',
                'type': 'earning'
            }
        }, {
            "thing": "Cadenas",
            "cost": "850000",
            "date": "2019/11/25",
            "percent": "2",
            "iconData": {
                "category": 'Cadenas',
                "iconName": 'money-check-alt',
                "class": '#DC90EE',
                'prefix': 'fas',
                'type': 'earning'
            }
        }
    ],
    savingData: [
        {
            "thing": "Libreta Militar",
            "maxCost": "1800000",
            "cost": "400000",
            "date": "2020/02/23",
            "maxDate": "2020/06/23",
            "from": "Trabajo",
            "iconData":  {
                "category": 'Libreta Militar',
                "iconName": 'book-open',
                "class": '#54C168',
                "prefix": "fas",
                "type": "saving"
            },
        }
    ]
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
    setEarningData(state, payload){
        state.earningData = payload;
    },
    setPersonalData(state, payload){
        state.personalData = payload;
    },
    setSavingData(state, payload){
        state.savingData = payload;
    }
}

const actions = {
    updateIcon({ commit, state }, payload){
        let icons = _.cloneDeep(state.iconsData);
        icons.splice(payload.index, 1, payload);
        commit('setIconsData', icons);
    },
    deleteIcon({ commit, state }, payload){
        let icons = _.cloneDeep(state.iconsData);
        icons.splice(payload.index, 1);
        commit('setIconsData', icons);
    },
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
    updateEarningItem({ commit, state }, payload){
        let item = _.cloneDeep(state.earningData);
        item.splice(payload.index, 1, payload.data);
        commit('setEarningData', item);
    },
    deleteEarningItem({ commit, state }, payload){
        let item = _.cloneDeep(state.earningData);
        item.splice(payload, 1);
        commit('setEarningData', item);
    },
    updateEarningsData({ commit, state }, payload){
        let icons = _.cloneDeep(state.earningData);
        icons.unshift(payload);
        commit('setEarningData', icons);
    },   
    updatePersonalData({ commit, state }, payload){
        let item = _.cloneDeep(state.personalData);
        item.userData = payload.userData;
        item.budgetData = payload.budgetData;
        commit('setPersonalData', item);
    },
    updateSavingItem({ commit, state }, payload){
        let item = _.cloneDeep(state.savingData);
        item.splice(payload.index, 1, payload.data);
        commit('setSavingData', item);
    },
    deleteSavingItem({ commit, state }, payload){
        let item = _.cloneDeep(state.savingData);
        item.splice(payload, 1);
        commit('setSavingData', item);
    },
    updateSavingData({ commit, state }, payload){
        let icons = _.cloneDeep(state.savingData);
        icons.unshift(payload);
        commit('setSavingData', icons);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}