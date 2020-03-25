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
                    <ValidationProvider name="costo" rules="number" v-slot="{ errors }" class="container-item__column">
                        <label class="m-label">
                            Costo:
                        </label>
                        <input type="text" class="custom-form" placeholder="Ejm. 400000" v-model="itemData.cost" />
                        <span class="m-error">{{ errors[0] }}</span>
                    </ValidationProvider>
                </div>
                <div class="container-item__row">
                    <ValidationProvider name="costo" rules="number" v-slot="{ errors }" class="container-item__column">
                        <label class="m-label">
                            Fecha:
                        </label>
                        <input type="text" class="custom-form" placeholder="Ejm. 400000" v-model="itemData.date" />
                        <span class="m-error">{{ errors[0] }}</span>
                    </ValidationProvider>
                </div>
                <div class="container-item__row">
                    <ValidationProvider name="costo" rules="string" v-slot="{ errors }" class="container-item__column">
                        <label class="m-label">
                            Ingreso relacionado:
                        </label>
                        <input type="text" class="custom-form" placeholder="Ejm. 400000" v-model="itemData.from" />
                        <span class="m-error">{{ errors[0] }}</span>
                    </ValidationProvider>
                </div>
                <div class="container-item__row">
                    <label class="m-label">
                        Categoría:
                        <span class="m-small" v-if="itemData.iconData.iconName">
                            ({{itemData.iconData.iconName}})
                        </span>
                    </label>
                    <ValidationProvider class="relative" v-slot="{ errors }" rules="category">
                        <dropdown-categorys type="finance" keyFilter="saving" :data="iconsData" v-model="itemData.iconData" />
                        <span class="m-error relative" style="left: 0; bottom: -5px">{{errors[0]}}</span>
                    </ValidationProvider>
                </div>
                <div class="container-item__row">
                    <button class="m-button m-button-esmerald m-button-long" type="submit" @click="addItem()">Guardar</button>
                </div>
            </div>
        </form>
    </ValidationObserver>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: "formContainer",
    data: function() {
        return {
            itemData: {
                thing: '',
                cost: 0,
                date: '',
                from: 0,
                iconData: {}
            }
        }
    },
    computed: {
        ...mapState('common', {
            'iconsData': (state) => (state.iconsData)
        }),
        comprobeData(){
            let data = this.itemData;
            return data.thing && data.cost && data.date && data.from && data.iconData.iconName ? false : true;
        }
    },
    methods: {
        ...mapActions('common', [
            'updateSavingData'
        ]),
        onSubmit(){
            if(!this.comprobeData){            
                this.itemData.thing ='';
                this.itemData.cost ='';
                this.itemData.date ='';
                this.itemData.from ='';
                this.itemData.iconData = {};
            }
        },
        addItem(){
            if(!this.comprobeData){
                this.updateSavingData(_.cloneDeep(this.itemData));
            }
        },
    }
}
</script>