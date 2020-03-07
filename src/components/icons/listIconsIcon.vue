<template>
    <div class="icons-category__block" :class="type === 'custom' ? 'tooltip' : ''" @click="selectIcon(icon, icon.class, index)">
        <div class="icons-category__block--color" v-if="type === 'custom'" :style="{backgroundColor: icon.class}"></div>
        <div class="icons-category__block--item">
            <font-awesome-icon :icon="[icon.prefix, icon.iconName]" />
        </div>
        <div class="icons-category__block--title">
            <span class="m-paragraph">{{icon.iconName}}</span>
        </div>
        <div class="top" v-if="type === 'custom'">
            {{icon.category}}
            <i></i>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: "list-icons-icon",
    props: {
        icon: {
            type: Object,
            default: () => {}
        },
        type: {
            type: String,
            default: 'list'
        },
        index: {
            type: Number,
            default: 0
        }
    },
    methods: {
        ...mapActions('icons', [
            'updatePreviewIcon'
        ]),
        selectIcon(icon, className, index){
            let iconsSelect = {
                class: className ? icon.class : "#739AFF",
                category: className ? icon.category : "",
                iconName: icon.iconName,
                prefix: icon.prefix,
                index: index
            };
            this.updatePreviewIcon(iconsSelect)
        },
    }
}
</script>