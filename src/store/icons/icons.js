const state = {
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
        },
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
    iconsArray: [],
    previewIcon: {
        class: "#739AFF"
    },
    renderIcons: [],
    copyRenderIcons: [],
    stepRender: 15,
    toggle: true,
    avalible: false
}

const getters = {
    getPreviewIcon(state){
        return state.previewIcon;
    }
}

const mutations = {
    setIconsData(state, payload){
        state.iconsData = payload
    },
    setPreviewIcon(state, payload){
        state.previewIcon = payload
    },
    setIconsArray(state, payload){
        state.iconsArray = payload;
    },
    setRenderIcons(state, payload){
        state.renderIcons = payload;
    },
    setCopyRenderIcons(state, payload){
        state.copyRenderIcons = payload;
    },
    setStepRender(state, payload){
        state.stepRender = payload;
    },
    setToggle(state, payload){
        state.toggle = payload;
    },
    setAvalible(state, payload){
        state.avalible = payload;
    }
}

const actions = {
    updateIconsData({ commit, state }, payload){
        let icons = _.cloneDeep(state.iconsData);
        icons.unshift(payload);
        commit('setIconsData', icons);
    },
    updateIcon({ commit, state }, payload){
        let icons = _.cloneDeep(state.iconsData);
        icons.splice(payload.index, 1, payload);
        commit('setIconsData', icons);
    },
    updatePreviewIcon({ commit }, payload){
        commit('setPreviewIcon', payload);
    },
    updateIconsArray({ commit, state }, payload){
        let icons = _.cloneDeep(state.iconsArray);
        icons.push(payload);
        commit('setIconsArray', icons);
    },
    updateRenderIcons({ commit, state }, payload){
        let icons = _.cloneDeep(state.renderIcons);
        payload ? icons.push(payload) : icons = payload;
        commit('setRenderIcons', payload);
    },
    updateCopyRenderIcons({ commit, state }, payload){
        let icons = _.cloneDeep(state.copyRenderIcons);
        payload ? icons.push(payload) : icons = payload;
        commit('setCopyRenderIcons', payload);
    },
    updateStepRender({ commit }, payload){
        let step = _.cloneDeep(state.stepRender);
        payload.type === 'add' ? payload.val > 0 ? step += payload.val : step = 0 : step = payload.val;
        commit('setStepRender', step);
    },
    updateToggle({ commit }, payload){
        commit("setToggle", payload);
    },
    updateAvalible({ commit }, payload){
        commit("setAvalible", payload);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}