<template>
    <div class="container-item__row search-icons__input">
        <input type="text" class="custom-form" v-model="filterValue">
        <span class="search-icons__icon">
            <font-awesome-icon icon="search"/>
        </span>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
    name: "listIconsSearch",
    data: function(){
        return{
            filterValue: ''
        }
    },
    watch: {
        filterValue(newVal){
            this.updateStepRender({ val: 15, type: 'set'});
            this.updateRenderIcons( [] );
            if(newVal){
                let arr = Object.values(this.iconsArr[0]);
                arr = arr.filter(x => {
                    return x.iconName.includes(newVal);
                });
                this.updateRenderIcons(Object.values(arr));
            } else {
                this.updateRenderIcons(Object.values(_.cloneDeep(this.iconsArr[0])));
            }
        },
    },
    computed: {
        ...mapState('icons', {
            "iconsArr": (state) => (state.iconsArray)
        })
    },
    methods: {
        ...mapActions('icons', [
            'updateStepRender',
            'updateRenderIcons'
        ])
    }
}
</script>