const state = {
    summaryData: [
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
    ],
    selectedArray: {},
    dropDownToggle: false
}

const getters = {
    getSummaryData(state){
        let summaryData = _.cloneDeep(state.summaryData);
        let result = summaryData.reduce((acc, val) => {
            let o = acc.filter((obj) => {
                    return obj.iconData.category == val.iconData.category;
                }).pop() || {...val, cost:0};
                
                o.cost += parseInt(val.cost);
                acc.push(o);
                return acc;
            },[]);

            let finalresult = result.filter((itm, i, a) => {
                return i == a.indexOf(itm);
            });

            finalresult.map(x => {
                x.categoryData = summaryData.filter(y => {
                    return  x.iconData.category == y.iconData.category;
                })
            })
        return finalresult;
    }
}

const mutations = {
    setSummaryData(state, payload){
        state.summaryData = payload;
    },
    setSelectedArray(state, payload){
        state.selectedArray = payload;
    },
    setDropDownToggle(state, payload){
        state.dropDownToggle = payload;
    },
}

const actions = {
    uploadSummaryData({ commit }, payload){
        commit("setSummaryData", payload);
    },
    uploadSelectedArray({ commit }, payload){
        commit("setSelectedArray", payload);
    },
    uploadDropDownToggle({ commit }, payload){
        commit("setDropDownToggle", payload);
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}