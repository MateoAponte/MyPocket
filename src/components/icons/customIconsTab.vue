<template>
    <div class="container-item__column" >
        <div class="container-item__row flex-wrap custom-icons" style="flex-wrap: wrap; justify-content: center; max-height: 416px; min-width: 450px; overflow: auto; ">
            <div class="container-item__column" v-for="(icon, index) in iconsData" :key="index" style="width: auto">
                <list-icons-icon :icon="icon" :index="index" type="custom" />
            </div> 
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import listIconsIcon from './listIconsIcon';

export default {
    name: "customIconsTab",
    components: {
        listIconsIcon
    },
    computed: {
        ...mapState('icons', {
            "iconsData": (state) => (state.iconsData)
        })
    }
}
</script>