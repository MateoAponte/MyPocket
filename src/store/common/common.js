const state = {
    data: {}
}

const getters = {}

const mutations = {
    setUserData(state, payload){
        state.data = payload
    }
}

const actions = {
    updateUserData({ commit }, payload){
        commit('setUserData', payload);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

