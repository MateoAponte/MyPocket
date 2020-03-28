<template>
    <ValidationObserver class="m-container-column" v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(onSubmit())" class="m-card">
            <div class="m-card-body">
                <div class="container-item__row">
                    <ValidationProvider name="objeto" rules="string" v-slot="{ errors }" class="container-item__column">
                        <label class="m-label">
                            Nombre:
                        </label>
                        <input type="text" class="custom-form" placeholder="Ejm. Libros" v-model="itemData.thing" />
                        <span class="m-error">{{ errors[0] }}</span>
                    </ValidationProvider>
                </div>
                <div class="container-item__row">
                    <ValidationProvider name="costo" rules="number" v-slot="{ errors }" class="container-item__column">
                        <label class="m-label">
                            Cantidad Total:
                        </label>
                         <input type="text" class="custom-form" placeholder="Ejm. 400000" v-model="itemData.maxCost" />
                        <span class="m-error">{{ errors[0] }}</span>
                    </ValidationProvider>
                    <ValidationProvider name="costo" rules="number" v-slot="{ errors }" class="container-item__column">
                        <label class="m-label">
                            Ahorro:
                        </label>
                        <input type="text" class="custom-form" placeholder="Ejm. 400000" v-model="itemData.cost" />
                        <span class="m-error">{{ errors[0] }}</span>
                    </ValidationProvider>
                </div>
                <div class="container-item__row">
                    <ValidationProvider name="costo" rules="number" v-slot="{ errors }" class="container-item__column">
                        <label class="m-label">
                            Fecha Limite:
                        </label>
                        <date-picker v-model="itemData.maxDate" placeholder="Ingrese una fecha"  :displayFormat="moment(itemData.maxDate).format('YYYY/MM/DD')" :isDateDisabled="isFutureDate" :formatDate="formatDate" :format="format" />
                        <span class="m-error">{{ errors[0] }}</span>
                    </ValidationProvider>
                    <ValidationProvider name="costo" rules="string" v-slot="{ errors }" class="container-item__dropdown">
                        <label class="m-label">
                            Ingreso relacionado:
                        </label>
                        <v-select :options="earningData" label="thing" :reduce="earningData => earningData.thing" v-model="itemData.from" placeholder="Seleccione una opción"></v-select>
                        <span class="m-error">{{ errors[0] }}</span>
                    </ValidationProvider>
                </div>
                <!-- <div class="container-item__row">
                </div> -->
                <div class="container-item__row">
                    <div class="container-item__row">
                        <label class="m-label">
                            Categoría:
                            <span class="m-label m-small" v-if="itemData.iconData.iconName">
                                ({{itemData.iconData.category}})<font-awesome-icon style="margin-left: 10px" :icon="itemData.iconData.iconName"/>
                            </span>
                        </label>
                        <ValidationProvider class="relative" v-slot="{ errors }" rules="category">
                            <dropdown-categorys type="saving" keyFilter="saving" :data="iconsData" v-model="itemData.iconData" />
                            <span class="m-error relative" style="left: 0; bottom: -5px">{{errors[0]}}</span>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="container-item__row">
                    <button class="m-button m-button-esmerald m-button-long" type="submit" @click="addItem()">Guardar</button>
                </div>
            </div>
        </form>
    </ValidationObserver>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import moment from 'moment';

export default {
    name: "formContainer",
    data: function() {
        return {
            itemData: {
                thing: '',
                cost: 0,
                maxCost: 0,
                maxDate: '',
                date: moment().add(1, 'month').format('YYYY/MM/DD'),
                from: 0,
                iconData: {}
            },
            format: 'YYYY/MM/DD',
        }
    },
    computed: {
        ...mapState('common', {
            'iconsData': (state) => (state.iconsData),
            'earningData': (state) => (state.earningData)
        }),
        comprobeData(){
            let data = this.itemData;
            return data.thing && data.cost && data.maxCost && data.maxDate && data.date && data.from && data.iconData.iconName ? false : true;
        },
    },
    methods: {
        ...mapActions('common', [
            'updateSavingData'
        ]),
        onSubmit(){
            if(!this.comprobeData){            
                this.itemData.thing ='';
                this.itemData.cost ='';
                this.itemData.maxCost ='';
                this.itemData.maxDate ='';
                this.itemData.from ='';
                this.itemData.iconData = {};
            }
        },
        addItem(){
            if(!this.comprobeData){
                this.updateSavingData(_.cloneDeep(this.itemData));
            }
        },
        isFutureDate(date) {
            const today = new Date();
            const currentDate = new Date(today.setDate(today.getDate() - 1));
            return date < currentDate;
        },
        formatDate(dateObj, format) {
            return moment(dateObj).format(format);
        }
    },
    mounted() {
        let input = document.querySelector('.vdpComponent.vdpWithInput').childNodes[0];
        input.setAttribute('placeholder', 'Ingrese un fecha');
        input.classList.add('custom-form')
    }
}
</script>