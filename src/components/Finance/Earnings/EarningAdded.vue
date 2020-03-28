<template>
    <div class="container-item__column--long">
        <ValidationObserver class="m-card" v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(onSubmit())" class="m-card-body" style="overflow: visible">
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
                    <ValidationProvider name="objeto" rules="number" v-slot="{ errors }" class="container-item__column">
                        <label class="m-label">
                            Costo:
                        </label>
                        <input type="text" class="custom-form" placeholder="Ejm. Libros" v-model="itemData.cost" />
                        <span class="m-error">{{ errors[0] }}</span>
                    </ValidationProvider>
                    <ValidationProvider name="objeto" rules="number" v-slot="{ errors }" class="container-item__column--medium  ">
                        <label class="m-label">
                            Desc.:
                        </label>
                        <input type="text" class="custom-form" placeholder="Ejm. Libros" v-model="itemData.percentil" />
                        <span class="m-error">{{ errors[0] }}</span>
                    </ValidationProvider>
                </div>
                <div class="container-item__row vertical-center">
                    <div class="container-item__column--medium">
                        <label class="m-label">
                            Iconos:
                        </label>
                        <span v-if="itemData.iconData.category" class="m-small width-100">
                            ({{itemData.iconData.category}})<font-awesome-icon :icon="itemData.iconData.iconName"/>
                        </span>
                    </div>
                    <ValidationProvider class="relative" v-slot="{ errors }" rules="category">
                        <dropdown-categorys type="finance" keyFilter="earning" :data="iconsData" v-model="itemData.iconData" />
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
                    <button class="m-button m-button-azure m-button-long" type="submit" @click="addItem()">Agregar <font-awesome-icon icon="plus" /></button>
                </div>
            </form>
        </ValidationObserver>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import moment from 'moment';

export default {
    name: "earning-added",
    data: function(){
        return {
            itemData: {
                cost: 0,
                percentil: 0,
                thing: '',
                iconData: {},
                date: moment().format('YYYY/MM/DD'),
                maxDate: ''
            },
            showDateConfig: false
        }
    },
    computed: {
        ...mapState('common', {
            'iconsData': (state) => (state.iconsData)
        }),
    },
    methods: {
        ...mapActions('common', [
            'updateEarningsData'
        ]),
        addItem(){
            this.updateEarningsData(_.cloneDeep(this.itemData));
            this.itemData = {
                cost: 0,
                percentil: 0,
                thing: '',
                iconData: {},
                date: moment().format('YYYY/MM/DD'),
                maxDate: ''
            }
        },
        onSubmit() {
            console.log('Submit')
        },
        isFutureDate(date) {
            const today = new Date();
            const currentDate = new Date(today.setDate(today.getDate() - 1));
            return date < currentDate;
        },
        formatDate(dateObj, format) {
            return moment(dateObj).format(format);
        }
    }
}
</script>