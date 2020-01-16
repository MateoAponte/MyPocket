const state = {
    formType: 'login'
}

const getters = {
}

const mutations = {
    setFormType(state, payload){
        state.formType = payload;
    }
}

const actions = {
    updateFormType({ commit }, payload){
        commit("setFormType", payload);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

