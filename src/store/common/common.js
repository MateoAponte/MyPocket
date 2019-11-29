const state = {
    getUserData: {}
}

const getters = {
    getUserData(state){
        return state.getUserData;
    }
}

const mutations = {
    setUserData(state, payload){
        state.userData = payload
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

