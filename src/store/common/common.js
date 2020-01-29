const state = {
    data: {},
    modalData: {
        type: "",
        action: "",
        subject: "",
        title: ""
    }
}

const getters = {}

const mutations = {
    setUserData(state, payload){
        state.data = payload
    },
    setModalData(state, payload){
        state.modalData = payload
    }
}

const actions = {
    updateUserData({ commit }, payload){
        commit('setUserData', payload);
    },
    updateModalData({ commit }, payload){
        commit('setModalData', payload);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

