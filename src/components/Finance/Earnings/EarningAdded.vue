<template>
    <div class="container-item__column--long">
        <ValidationObserver class="m-card" v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(onSubmit())" class="m-card-body">
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
                date: moment().format('YYYY/MM/DD')
            }
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
            this.itemData = {
                cost: 0,
                percentil: 0,
                thing: '',
                iconData: {},
                date: moment().format('YYYY/MM/DD')
            }
            this.updateEarningsData(this.itemData)
        },
    }
}
</script>