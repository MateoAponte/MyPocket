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
                    <ValidationProvider name="costo" rules="string" v-slot="{ errors }" class="container-item__dropdown">
                        <label class="m-label">
                            Ingreso relacionado:
                        </label>
                        <v-select :options="earningData" label="thing" :reduce="earningData => earningData.thing" v-model="itemData.from" placeholder="Seleccione una opción"></v-select>
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
                            Cuotas:
                        </label>
                        <input type="text" class="custom-form" placeholder="Ejm. 400000" v-model="itemData.cost" disabled />
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
                            Frecuencia:
                        </label>
                        <v-select :options="quantity" label="thing" v-model="itemData.quantity" placeholder="Seleccione una opción"></v-select>
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
                date: moment().format('YYYY/MM/DD'),
                from: 0,
                iconData: {},
                quantity: ''
            },
            format: 'YYYY/MM/DD',
            quantity: []
        }
    },
    watch: {
        "itemData.maxCost"(newVal) {
            if(this.itemData.maxDate && this.itemData.quantity){
                this.getFee();
            }
        },
        "itemData.quantity"(newVal) {
            if(this.itemData.maxDate){
                this.getFee();
            }
        },
        "itemData.maxDate"(newVal) {
            this.getFeeOptions();
            if(this.itemData.quantity){
                this.getFee();
            }
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
                this.itemData.quantity = '';
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
        },
        getFeeOptions() {
            this.quantity = [];
            let months = moment(this.itemData.maxDate).diff(this.itemData.date, 'month');
            let finalMonth = moment(this.itemData.maxDate);
            let startDate = moment(finalMonth).startOf('month');
            let days = finalMonth.diff(startDate, 'days');
            this.quantity.push('Una cuota');
            if (days >= 15){
                this.quantity.push('15 días');
            } if(months >= 2){
                this.quantity.push('1 mes');
            } if(months >= 4){
                this.quantity.push('2 meses');
            } if(months >= 6){
                this.quantity.push('3 meses');
            } if(months >= 12){
                this.quantity.push('6 meses');
            }
        },
        getFee(){
            let months = moment(this.itemData.maxDate).diff(this.itemData.date, 'month');
            switch (this.itemData.quantity){
                case 'Una cuota':
                    months = 1;
                break;
                case '15 días':
                    months = months * 2;
                break;
                case '1 mes':
                    months = months;
                break;
                case '2 meses':
                    months = months / 2;
                break;
                case '3 meses':
                    months = months / 3;
                break;
                case '6 meses':
                    months = months / 6;
                break;
            }
            let costByMonth = this.itemData.maxCost / months;
            this.itemData.cost = parseInt(costByMonth);
        }
    },
    mounted() {
        let input = document.querySelector('.vdpComponent.vdpWithInput').childNodes[0];
        input.setAttribute('placeholder', 'Ingrese un fecha');
        input.classList.add('custom-form')
    }
}
</script>

<style lang="scss" scoped>
    .m-card-body{
        overflow-y: visible;
    }
</style>