<template>
    <div>
        <div name="categorias"
                            class="container-item__column icons-container--toggle item--unset-flex"
                            :class="toogleClass">
            <div class="container-item__col-row space-around" v-for="(iconSections, i) in data" :key="i">
                <div class="container-item__column simple-column" v-for="(icon, index) in iconSections" :key="index">
                    <div class="radio-button icons-category"><!-- .tooltip -->
                        <input :id="'icon' + icon.iconName + (index + i) + type" class="categories-radio" name="category" type="radio" :value="icon" @click="emitCategory(icon)"/>
                        <label :for="'icon' + icon.iconName + (index + i) + type" >
                            <font-awesome-icon :icon="icon.iconName" :style="{ backgroundColor:icon.class }"/>
                        </label>
                        <!--<div class="top">
                            {{icon.category}}
                            <i></i>
                        </div>-->
                    </div>
                </div>
            </div>
        </div>
        <span class="toogle-icon">
            <font-awesome-icon @click="toggleCard" icon="sort-down" class="rotate-icon" :class="iconRotate"/>
        </span>
    </div>
</template>

<script>
export default {
    name: "dropdown-categorys",
    props: {
        data: {
            type: Array,
            default: () => []
        },
        type: {
            type: String,
            default: ""
        },
        select: {
            type: Object,
            default: () => {}
        }
    },
    data: function(){
        return{
            toggleIcon: false
        }
    },
    computed: {
        toogleClass(){
            return this.toggleIcon ? "max-height-toggle" : "min-height-toggle";
        },
        iconRotate(){
            return this.toggleIcon ? "icon--rotate-180" : "icon--rotate-0";
        },
    },
    methods: {
        emitCategory(val){
            this.$emit( 'input', val )
        },
        toggleCard(){
            this.toggleIcon = !this.toggleIcon;
        },
    },
}
</script>