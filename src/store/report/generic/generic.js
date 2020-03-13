const state = {
    categoriesData: [],
    mainDateCategories: [],
    navItemsArr: [],
    dateCategories: [],
    selectedData: [],
    eventData: {},
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
            "date": "2019/11/02",
            "iconData": {
                "category": 'Tecnología',
                "name": 'mobile-alt',
                "class": '#BE4BDB'
            }
        }, {
            "thing": "Celular",
            "cost": "250000",
            "priority": "Alta",
            "date": "2019/11/05",
            "iconData": {
                "category": 'Banco & Transacciones',
                "name": 'money-bill-wave',
                "class": '#12BB85'
            }
        }, {
            "thing": "Bicicleta",
            "cost": "167000",
            "priority": "Alta",
            "date": "2019/11/10",
            "iconData": {
                "category": 'Banco & Transacciones',
                "name": 'money-bill-wave',
                "class": '#12BB85'
            }
        }, {
            "thing": "Comida",
            "cost": "100000",
            "priority": "Media",
            "date": "2019/11/14",
            "iconData": {
                "category": 'Comida',
                "name": 'utensils',
                "class": '#FD7E14'
            }
        }, {
            "thing": "Transporte",
            "cost": "80000",
            "priority": "Media",
            "date": "2019/11/16",
            "iconData": {
                "category": 'Viajes',
                "name": 'plane',
                "class": '#F963A0'
            }
        }, {
            "thing": "Canastas",
            "cost": "300000",
            "priority": "Alta",
            "date": "2019/11/18",
            "iconData": {
                "category": 'Comida',
                "name": 'utensils',
                "class": '#FD7E14'
            }
        }, {
            "thing": "Instituto",
            "cost": "150000",
            "priority": "Alta",
            "date": "2019/11/01",
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
            "date": "2019/11/31",
            "iconData": {
                "category": 'Tecnología',
                "name": 'mobile-alt',
                "class": '#BE4BDB'
            }
        }, {
            "thing": "Audifonos (Balaca)",
            "cost": "80000",
            "priority": "Media",
            "date": "2019/11/30",
            "iconData": {
                "category": 'Moda',
                "name": 'tshirt',
                "class": '#4C6EF5'
            }
        },
        {
            "thing": "Universidad",
            "cost": "500000",
            "priority": "Alta",
            "date": "2020/02/05",
            "iconData": {
                "category": 'Tecnología',
                "name": 'mobile-alt',
                "class": '#BE4BDB'
            }
        }, {
            "thing": "Celular",
            "cost": "250000",
            "priority": "Alta",
            "date": "2020/02/06",
            "iconData": {
                "category": 'Banco & Transacciones',
                "name": 'money-bill-wave',
                "class": '#12BB85'
            }
        }, {
            "thing": "Bicicleta",
            "cost": "167000",
            "priority": "Alta",
            "date": "2020/02/08",
            "iconData": {
                "category": 'Banco & Transacciones',
                "name": 'money-bill-wave',
                "class": '#12BB85'
            }
        }, {
            "thing": "Comida",
            "cost": "100000",
            "priority": "Media",
            "date": "2020/02/09",
            "iconData": {
                "category": 'Comida',
                "name": 'utensils',
                "class": '#FD7E14'
            }
        }, {
            "thing": "Transporte",
            "cost": "80000",
            "priority": "Media",
            "date-": "2020/02/11",
            "iconData": {
                "category": 'Viajes',
                "name": 'plane',
                "class": '#F963A0'
            }
        }, {
            "thing": "Canastas",
            "cost": "300000",
            "priority": "Alta",
            "date": "2020/02/14",
            "iconData": {
                "category": 'Comida',
                "name": 'utensils',
                "class": '#FD7E14'
            }
        }, {
            "thing": "Instituto",
            "cost": "150000",
            "priority": "Alta",
            "date": "2020/02/16",
            "iconData": {
                "category": 'Banco & Transacciones',
                "name": 'money-bill-wave',
                "class": '#12BB85'
            }
        }, {
        "thing": "Otros",
        "cost": "50000",
        "priority": "Baja",
        "date": "2020/02/25",
        "iconData": {
            "category": 'Comida',
            "name": 'utensils',
            "class": '#FD7E14'
        }
        }, {
            "thing": "Audifonos (Balaca)",
            "cost": "80000",
            "priority": "Media",
            "date": "2020/02/18",
            "iconData": {
                "category": 'Tecnología',
                "name": 'mobile-alt',
                "class": '#BE4BDB'
            }
        }, {
            "thing": "Audifonos (Balaca)",
            "cost": "80000",
            "priority": "Media",
            "date": "2020/02/27",
            "iconData": {
                "category": 'Moda',
                "name": 'tshirt',
                "class": '#4C6EF5'
            }
        }, {
            "thing": "Universidad",
            "cost": "800000",
            "priority": "Alta",
            "date": "2020/03/01",
            "iconData": {
                "category": "Tecnología",
                "name": "mobile-alt",
                "class": "#BE4BDB"
            }
        }, {
            "thing": "Universidad",
            "cost": "10000",
            "priority": "Alta",
            "date": "2020/03/05",
            "iconData": {
                "category": "Juegos",
                "name": "mobile-alt",
                "class": "#BE4BDB"
            }
        }, {
            "thing": "Universidad",
            "cost": "1000000",
            "priority": "Alta",
            "date": "2020/03/15",
            "iconData": {
                "category": "Moda",
                "name": "mobile-alt",
                "class": "#BE4BDB"
            }
        }, {
            "thing": "Universidad",
            "cost": "900000",
            "priority": "Alta",
            "date": "2020/03/18",
            "iconData": {
                "category": "Tecnología",
                "name": "mobile-alt",
                "class": "#BE4BDB"
            }
        }, {
            "thing": "Universidad",
            "cost": "500000",
            "priority": "Alta",
            "date": "2020/04/25",
            "iconData": {
                "category": "Tecnología",
                "name": "mobile-alt",
                "class": "#BE4BDB"
            }
        }, {
            "thing": "Universidad",
            "cost": "500000",
            "priority": "Alta",
            "date": "2020/04/25",
            "iconData": {
                "category": "Moda",
                "name": "mobile-alt",
                "class": "#BE4BDB"
            }
        }, {
            "thing": "Universidad",
            "cost": "500000",
            "priority": "Alta",
            "date": "2020/04/25",
            "iconData": {
                "category": "Juegos",
                "name": "mobile-alt",
                "class": "#BE4BDB"
            }
        }, {
            "thing": "Universidad",
            "cost": "500000",
            "priority": "Alta",
            "date": "2020/04/25",
            "iconData": {
                "category": "Tecnología",
                "name": "mobile-alt",
                "class": "#BE4BDB"
            }
        }, {
            "thing": "Universidad",
            "cost": "500000",
            "priority": "Alta",
            "date": "2020/04/25",
            "iconData": {
                "category": "Moda",
                "name": "mobile-alt",
                "class": "#BE4BDB"
            }
        }, {
            "thing": "Universidad",
            "cost": "500000",
            "priority": "Alta",
            "date": "2020/04/25",
            "iconData": {
                "category": "Juegos",
                "name": "mobile-alt",
                "class": "#BE4BDB"
            }
        }, {
            "thing": "Universidad",
            "cost": "500000",
            "priority": "Alta",
            "date": "2020/04/25",
            "iconData": {
                "category": "Tecnología",
                "name": "mobile-alt",
                "class": "#BE4BDB"
            }
        }, {
            "thing": "Universidad",
            "cost": "500000",
            "priority": "Alta",
            "date": "2020/04/25",
            "iconData": {
                "category": "Moda",
                "name": "mobile-alt",
                "class": "#BE4BDB"
            }
        }
    ]
}

const getters = {
    getSortSelectedData(state){
        let newArr = _.cloneDeep(state.selectedData);
        let sortArray = newArr.sort((a,b) => {
            return new Date(b.date) - new Date(a.date);
        });
        return sortArray;
    }
}

const mutations = {
    setCategoriesData(state, payload){
        state.categoriesData = payload;
    },
    setMainDateCategories(state, payload){
        state.mainDateCategories = payload;
    },
    setNavItemsArr(state, payload){
        state.navItemsArr = payload;
    },
    setDateCategories(state, payload){
        state.dateCategories = payload;
    },
    setEventData(state, payload){
        state.eventData = payload;
    },
    setSelectedData(state, payload){
        state.selectedData = payload;
    },
}

const actions = {
    updateCategoriesData({ commit, state }, payload){
        let categories = _.cloneDeep(state.categoriesData);
        payload.length !== 0 ? categories.push(payload) : categories = [];
        commit("setCategoriesData", categories);
    },
    updateMainDateCategories({ commit }, payload){
        commit("setMainDateCategories", payload );
    },
    updateNavItemsArr({ commit }, payload){
        commit("setNavItemsArr", payload );
    },
    updateDateCategories({ commit }, payload){
        commit("setDateCategories", payload );
    },
    updateEventData({ commit }, payload){
        commit("setEventData", payload );
    },
    updateSelectedData({ commit }, payload){
        commit("setSelectedData", payload );
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}