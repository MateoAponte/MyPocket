const state = {
    selectedArray: {},
    dropDownToggle: false
}

const getters = {}

const mutations = {
    setSelectedArray(state, payload){
        state.selectedArray = payload;
    },
    setDropDownToggle(state, payload){
        state.dropDownToggle = payload;
    },
}

const actions = {
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