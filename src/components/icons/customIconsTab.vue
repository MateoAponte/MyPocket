<template>
    <div class="container-item__column" >
        <div class="container-item__column minify-padding">
            <div class="icon-section__title">
                <span class="m-title-big">Gastos</span>
            </div>
            <div class="container-item__row flex-wrap custom-icons" style="flex-wrap: wrap; justify-content: center; max-height: 416px; min-width: 750px; overflow: auto; ">
                <div class="container-item__column" v-for="(icon, index) in expensesIcons" :key="index" style="width: auto">
                    <list-icons-icon :icon="icon" :index="index" type="custom" />
                </div> 
            </div>
            <div class="icon-section__title">
                <span class="m-title-big">Ganancias</span>
            </div>
            <div class="container-item__row flex-wrap custom-icons" style="flex-wrap: wrap; justify-content: center; max-height: 416px; min-width: 750px; overflow: auto; ">
                <div class="container-item__column" v-for="(icon, index) in earningsIcons" :key="index" style="width: auto">
                    <list-icons-icon :icon="icon" :index="index" type="custom" />
                </div> 
            </div>
            <div class="icon-section__title">
                <span class="m-title-big">Ahorros</span>
            </div>
            <div class="container-item__row flex-wrap custom-icons" style="flex-wrap: wrap; justify-content: center; max-height: 416px; min-width: 750px; overflow: auto; ">
                <div class="container-item__column" v-for="(icon, index) in savingsIcons" :key="index" style="width: auto">
                    <list-icons-icon :icon="icon" :index="index" type="custom" />
                </div> 
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
        ...mapState('common', {
            "iconsData": (state) => (state.iconsData)
        }),
        expensesIcons(){
            let arr = _.cloneDeep(this.iconsData);
            arr = arr.filter(x => x.type === 'expense');
            return arr;
        },
        earningsIcons(){
            let arr = _.cloneDeep(this.iconsData);
            arr = arr.filter(x => x.type === 'earning');
            return arr;
        },
        savingsIcons(){
            let arr = _.cloneDeep(this.iconsData);
            arr = arr.filter(x => x.type === 'saving');
            return arr;
        }
    }
}
</script>

<style lang="scss" scoped>
    .icon-section__title{
        width: 100%;
        padding: 5px 0px;
        border-bottom: 1px solid #cccccc;
    }
</style>