<template>
    <div class="m-general-container">
        <div class="m-container">
            <div class="m-container-row">
                <div class="m-container-column" style="overflow: hidden">
                    <div class="m-container-tabs">
                        <div class="m-container-tabs__tab" @click="updateToggle(true)" :class="toggle ? 'active-tab' : ''">
                            <font-awesome-icon icon="list" />
                            <span class="m-label">
                                Listas
                            </span>
                        </div>
                        <div class="m-container-tabs__tab" @click="updateToggle(false)" :class="toggle ? '' : 'active-tab'">
                            <font-awesome-icon icon="user-edit" />
                            <span class="m-label">
                                Propios
                            </span>
                        </div>
                    </div>
                    <div class="m-card">
                        <div class="m-card-body icons-container">
                            <div class="container-item__row">
                                <transition name="fade-card">
                                    <list-icons-tab v-if="toggle"/>
                                </transition>
                                <transition name="fade-card">
                                    <custom-icons-tab v-if="!toggle" />
                                </transition>
                                <preview-icons />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { mapGetters, mapActions, mapState } from 'vuex';

import ListIconsTab from '@Components/icons/listIconsTab';
import customIconsTab from '@Components/icons/customIconsTab';
import previewIcons from '@Components/icons/previewIcons';

export default {
    name: "icons-config", 
    components: {
        ListIconsTab,
        customIconsTab,
        previewIcons
    },
    watch: {
        toggle(newVal){
            if(!newVal){
                this.updateAvalible(true);
                this.selectIcon(this.iconsData[0], this.iconsData[0].class, 0);
            }
            if(newVal){
                this.updateRenderIcons(Object.values(_.cloneDeep(this.iconsArr[0])));
                this.updateAvalible(false);
                this.selectIcon(this.copyRenderData[0]);
            }
        },
        renderData(){
            this.updateCopyRenderIcons( [] );
            this.updateCopyRenderIcons(Object.values(_.cloneDeep(this.renderData)).splice(1,this.stepRender));
        }
    },
    computed: {
        ...mapState('icons', {
            "iconsArr": (state) => (state.iconsArray),
            "toggle": (state) => (state.toggle),
            "copyRenderData": (state) => (state.copyRenderIcons),
            "renderData": (state) => (state.renderIcons),
            "iconsData": (state) => (state.iconsData),
            "stepRender": (state) => (state.stepRender)
        }),
    },
    methods: {
        ...mapActions('icons', [
            'updatePreviewIcon',
            'updateIconsArray',
            'updateRenderIcons',
            'updateToggle',
            'updateAvalible',
            'updateCopyRenderIcons'
        ]),
        selectIcon(icon, className, index){
            let iconsSelect = {
                class: className ? icon.class : "#739AFF",
                category: className ? icon.category : "",
                iconName: icon.iconName,
                prefix: icon.prefix,
                index: index
            };
            this.updatePreviewIcon(iconsSelect);
        },
    },
    mounted(){
        this.updateIconsArray({...fas, ...fab })
        let iconConfig = {
            iconName: this.iconsArr[0].faAd.iconName,
            prefix: this.iconsArr[0].faAd.prefix,
            category: "",
            class: "#739AFF"
        };
        this.updatePreviewIcon(iconConfig);
        this.updateRenderIcons(Object.values(this.iconsArr[0]));
    }
}
</script>