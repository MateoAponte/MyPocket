<template>
    <div class="container-item__column">

        <list-icons-search />

        <div class="container-item__row flex-wrap">
            <div class="container-item__column" v-for="(icon, index) in copyRenderData" :key="index">
                <list-icons-icon :icon="icon" :index="index" type="list" />
            </div> 
            <div class="container-item__column" v-if="copyRenderData.length <= 0">
                <span class="m-title-big">No se encontraron resultados...</span>
                <img src="@Assets/img/search_engine.svg" alt="" height="350">
            </div>
        </div>
        <div class="container-item__column">
            <span class="m-link m-link--special" v-if="copyRenderData.length >= 15 && copyRenderData.length != (renderData.length - 1)" @click="addIcons()">Cargar mas Iconos...</span>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import listIconsSearch from './listIconsSearch';
import listIconsIcon from './listIconsIcon';

export default {
    name: "listIconsTab",
    components: {
        listIconsSearch,
        listIconsIcon
    },
    watch: {
        stepRender(){
            this.updateCopyRenderIcons( [] );
            this.updateCopyRenderIcons(Object.values(_.cloneDeep(this.renderData)).splice(1,this.stepRender));
        },
    },
    computed: {
        ...mapState('icons', {
            "copyRenderData": (state) => (state.copyRenderIcons),
            "renderData": (state) => (state.renderIcons),
            "stepRender": (state) => (state.stepRender)
        })
    },
    methods: {
        ...mapActions('icons', [
            "updateStepRender",
            'updateCopyRenderIcons'
        ]),
        addIcons(){
            this.updateStepRender({ val: 15, type: 'add'})
        },
    }
}
</script>