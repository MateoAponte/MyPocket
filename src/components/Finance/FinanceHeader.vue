<template>
    <ValidationObserver class="m-head-container" v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(onSubmit())" class="m-head-container-card">
            <div class="container-item__row">
                <ValidationProvider name="objeto" rules="string" v-slot="{ errors }" class="container-item__column">
                    <label class="m-label">
                        En que:
                    </label>
                    <input type="text" class="custom-form" placeholder="Ejm. Libros" v-model="itemData.thing" />
                    <span class="m-error">{{ errors[0] }}</span>
                </ValidationProvider>
                <ValidationProvider name="costo" rules="number" v-slot="{ errors }" class="container-item__column">
                    <label class="m-label">
                        Costo   :
                    </label>
                    <input type="text" class="custom-form" placeholder="Ejm. 400000" v-model="itemData.cost" />
                    <span class="m-error">{{ errors[0] }}</span>
                </ValidationProvider>
            </div>
            <div class="container-item__row">
                <div class="container-item__column--medium">
                    <label class="m-label">
                        Prioridad:
                    </label>
                </div>
                <ValidationProvider name="prioridad" rules="radio" v-slot="{ errors }" class="container-item__column container-item__col-row">
                    <div class="container-item__column">
                        <div class="radio-button">
                            <input id="hight" name="prority" type="radio" value="Alta" v-model="itemData.priority" />
                            <label for="hight" class="radio-label">Alta</label>
                        </div>
                        <span class="m-error">{{errors[0]}}</span>
                    </div>
                    <div class="container-item__column">
                        <div class="radio-button">
                            <input id="medium" name="prority" type="radio" value="Media" v-model="itemData.priority" />
                            <label for="medium" class="radio-label">Media</label>
                        </div>
                    </div>
                    <div class="container-item__column">
                        <div class="radio-button">
                            <input id="lower" name="prority" type="radio" value="Baja" v-model="itemData.priority" />
                            <label for="lower" class="radio-label">Baja</label>
                        </div>
                    </div>
                </ValidationProvider>
            </div>
            <div class="container-item__row vertical-center">
                <div class="container-item__column--medium">
                    <label class="m-label">
                        Categoría:
                    </label>
                    <span v-if="itemData.iconData.category" class="m-small width-100">
                        ({{itemData.iconData.category}})<font-awesome-icon :icon="itemData.iconData.name"/>
                    </span>
                </div>
                <ValidationProvider class="relative" v-slot="{ errors }" rules="category">
                    <div name="categorias"
                                        class="container-item__column icons-container--toggle item--unset-flex"
                                        :class="toogleClass">
                        <div class="container-item__col-row space-around" v-for="(iconSections, i) in getIconSections" :key="i">
                            <div class="container-item__column simple-column" v-for="(icon, index) in iconSections" :key="index">
                                <div class="radio-button icons-category"><!-- .tooltip -->
                                    <input :id="'icon' + icon.name + (index + i)" class="categories-radio" name="category" type="radio" :value="icon" v-model="itemData.iconData" />
                                    <label :for="'icon' + icon.name + (index + i)" >
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
                    <span class="m-error relative" style="left: 0; bottom: -5px">{{errors[0]}}</span>
                </ValidationProvider>
            </div>
            <div class="container-item__row">
                <button class="m-button m-button-esmerald m-button-flex" type="submit">Guardar <font-awesome-icon icon="save" /></button>
                <button class="m-button m-button-azure m-button-flex" type="submit" @click="addItem">Agregar <font-awesome-icon icon="plus" /></button>
            </div>
        </form>
    </ValidationObserver>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'FinanceHeader',
    data: function() {
        return {
            toggleIcon: false,
            rotation: 0,
            itemData: {
                thing: '',
                cost: '',
                priority: '',
                iconData: {}
            }
        }
    },
    computed: {
        ...mapGetters('finance', [
            'getIconData'
        ]),
        comprobeData(){
            let data = this.itemData;
            return data.thing && data.cost && data.priority && data.iconData.name ? false : true
        },
        toogleClass(){
            return this.toggleIcon ? "max-height-toggle" : "min-height-toggle";
        },
        iconRotate(){
            return this.toggleIcon ? "icon--rotate-180" : "icon--rotate-0";
        },
        getIconSections(){
            return _.chunk(_.cloneDeep(this.getIconData), 4);
        }
    },
    methods: {
        ...mapActions('finance', [
            'updateItemsData'
        ]),
        onSubmit(){
            if(!this.comprobeData){            
                this.itemData.thing ='';
                this.itemData.cost ='';
                this.itemData.priority ='';
                this.itemData.iconData = {};
            }
        },
        addItem(){
            if(!this.comprobeData){
                this.updateItemsData(_.cloneDeep(this.itemData))
                document.querySelector(".m-card-body.max-height-card.relative").scrollTop = 0;
            }
        },
        saveData(e){
            console.log(e)
        },
        toggleCard(){
            this.toggleIcon = !this.toggleIcon;
        }
    }
}
</script>