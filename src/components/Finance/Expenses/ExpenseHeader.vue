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
                        ({{itemData.iconData.category}})<font-awesome-icon :icon="itemData.iconData.iconName"/>
                    </span>
                </div>
                <ValidationProvider class="relative" v-slot="{ errors }" rules="category">
                    <dropdown-categorys type="finance" keyFilter="expense" :data="iconsData" v-model="itemData.iconData" />
                    <span class="m-error relative" style="left: 0; bottom: -5px">{{errors[0]}}</span>
                </ValidationProvider>
            </div>
            <div class="advance-config__container">
                <div class="container-item__row">
                    <label for="" class="m-label">
                        Config. Avanzada
                    </label>
                    <toggle-button v-model="showDateConfig"/>
                </div>
                <div class="container-item__row" v-if="showDateConfig">
                    <ValidationProvider name="objeto" rules="string" v-slot="{ errors }" class="container-item__column">
                        <label class="m-label">
                            Fecha Límite:
                        </label>
                        <date-picker v-model="itemData.maxDate" placeholder="Ingrese una fecha"  :displayFormat="moment(itemData.maxDate).format('YYYY/MM/DD')" :isDateDisabled="isFutureDate" :formatDate="formatDate" format="YYYY/MM/DD" />
                        <span class="m-error">{{ errors[0] }}</span>
                    </ValidationProvider>
                </div>
            </div>
            <div class="container-item__row">
                <button class="m-button m-button-esmerald m-button-flex" type="submit">Guardar <font-awesome-icon icon="save" /></button>
                <button class="m-button m-button-azure m-button-flex" type="submit" @click="addItem()">Agregar <font-awesome-icon icon="plus" /></button>
            </div>
        </form>
    </ValidationObserver>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import moment from 'moment';

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
                iconData: {},
                date: moment().format('YYYY/MM/DD')
            },
            showDateConfig: false
        }
    },
    computed: {
        ...mapState('common', {
            'iconsData': (state) => (state.iconsData)
        }),
        comprobeData(){
            let data = this.itemData;
            return data.thing && data.cost && data.priority && data.iconData.iconName ? false : true
        }
    },
    methods: {
        ...mapActions('common', [
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
        }
    }
}
</script>