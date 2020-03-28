<template>
     <div class="modal modal--big modal-edit" :style="{width: width}">
        <div class="modal__header">
            <span class="m-title">{{title}}</span>
        </div>
        <div class="modal__body">
            <div class="container-item__row minify-padding">
                <ValidationObserver class="container-item__column minify-padding"  v-slot="{ handleSubmit }">
                    <form @submit.prevent="handleSubmit(onSubmit())" class="width-100">
                        <div class="container-item__row minify-padding">
                            <ValidationProvider name="categoryName" rules="string" v-slot="{ errors }" class="container-item__column">
                                <label class="m-label">
                                    Nombre:
                                </label>
                                <input type="text" class="custom-form" placeholder="Ejm. Libros" v-model="itemData.thing" />
                                <span class="m-error">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="container-item__row vertical-center minify-padding">
                            <label class="m-label">
                                Categoría:
                                <br>
                                <span class="m-small">
                                    {{itemData.iconData.category}}
                                    <font-awesome-icon :icon="itemData.iconData.iconName"/>
                                </span>
                            </label>
                            <ValidationProvider class="relative" v-slot="{ errors }" rules="category">
                                 <dropdown-categorys type="edit" :keyFilter="filterIcons" :data="iconsData" v-model="itemData.iconData" />
                                <span class="m-error relative" style="left: 0; bottom: -5px">{{errors[0]}}</span>
                            </ValidationProvider>
                        </div>
                        <div class="container-item__row vertical-center minify-padding" v-if="modalData.type === 'expenses' || modalData.type === 'savings'">
                            <ValidationProvider name="expense" rules="number" v-slot="{ errors }"  class="container-item__column">
                                <label class="m-label">
                                    {{modalData.type === 'expenses' || modalData.type === 'earnings' ? 'Costo' : 'Cuota'}}
                                </label>
                                <input type="text" class="custom-form" placeholder="Ingrese su presupuesto" v-model="itemData.cost" />
                                <span class="m-error relative" style="left: 0; bottom: -5px">{{errors[0]}}</span>
                            </ValidationProvider>
                        </div>
                        <div class="container-item__row vertical-center minify-padding" v-if="modalData.type === 'savings'">
                            <ValidationProvider name="expense" rules="number" v-slot="{ errors }"  class="container-item__column" style="display: block; text-align: left;">
                                <label class="m-label">
                                    Meta:
                                </label>
                                <input type="text" class="custom-form" placeholder="Ingrese su presupuesto" v-model="itemData.maxCost" />
                                <span class="m-error relative" style="left: 0; bottom: -5px">{{errors[0]}}</span>
                            </ValidationProvider>
                            <ValidationProvider name="expense" rules="string" v-slot="{ errors }"  class="container-item__column" style="display: block; text-align: left;">
                                <label class="m-label">
                                    Ganancia Relac. :
                                </label>
                                <v-select :options="earningData" label="thing" :reduce="earningData => earningData.thing" v-model="itemData.from" placeholder="Seleccione una opción"></v-select>
                                <span class="m-error relative" style="left: 0; bottom: -5px">{{errors[0]}}</span>
                            </ValidationProvider>
                        </div>
                        <div class="container-item__row minify-padding" v-if="modalData.type === 'earnings'">
                            <ValidationProvider name="descuento" rules="number" v-slot="{ errors }"  class="container-item__column">
                                <label class="m-label">
                                    Descuento:
                                </label>
                                <input type="text" class="custom-form" placeholder="Ingrese su presupuesto" v-model="itemData.cost" />
                                <span class="m-error relative" style="left: 0; bottom: -5px">{{errors[0]}}</span>
                            </ValidationProvider>
                            <ValidationProvider name="expense" rules="number" v-slot="{ errors }"  class="container-item__column--mini">
                                <label class="m-label">
                                    Percent. :
                                </label>
                                <input type="text" class="custom-form" placeholder="0%" v-model="itemData.percent" />
                                <span class="m-error relative" style="left: 0; bottom: -5px">{{errors[0]}}</span>
                            </ValidationProvider>
                        </div>
                        <div class="container-item__row minify-padding" v-if="modalData.type === 'savings'">
                            <ValidationProvider name="descuento" rules="string" v-slot="{ errors }"  class="container-item__column" v-if="modalData.type === 'savings'">
                                <label class="m-label">
                                    Fecha Limite:
                                </label>
                                <date-picker v-model="itemData.maxDate" placeholder="Ingrese una fecha"  :displayFormat="moment(itemData.maxDate).format('YYYY/MM/DD')" :isDateDisabled="isFutureDate" :formatDate="formatDate" format="YYYY/MM/DD" />
                                <span class="m-error relative" style="left: 0; bottom: -5px">{{errors[0]}}</span>
                            </ValidationProvider>
                            <ValidationProvider name="descuento" rules="string" v-slot="{ errors }"  class="container-item__column" v-if="modalData.type === 'expenses' || modalData.type === 'earnings'">
                                <label class="m-label">
                                    Fecha de Uso:
                                </label>
                                <date-picker v-model="itemData.date" placeholder="Ingrese una fecha"  :displayFormat="moment(itemData.date).format('YYYY/MM/DD')" :isDateDisabled="isFutureDate" :formatDate="formatDate" format="YYYY/MM/DD" />
                                <span class="m-error relative" style="left: 0; bottom: -5px">{{errors[0]}}</span>
                            </ValidationProvider>
                        </div>
                        <div class="container-item__row minify-padding" v-if="modalData.type === 'expenses'">
                            <div class="container-item__column--medium">
                                <label class="m-label">
                                    Prioridad:
                                </label>
                            </div>
                            <ValidationProvider name="prioridad" rules="radio" v-slot="{ errors }" class="container-item__column container-item__col-row minify-padding">
                                <div class="container-item__column">
                                    <div class="radio-button">
                                        <input id="hightEdit" name="prority" type="radio" value="Alta" v-model="itemData.priority" />
                                        <label for="hightEdit" class="radio-label">Alta</label>
                                    </div>
                                    <span class="m-error">{{errors[0]}}</span>
                                </div>
                                <div class="container-item__column">
                                    <div class="radio-button">
                                        <input id="mediumEdit" name="prority" type="radio" value="Media" v-model="itemData.priority" />
                                        <label for="mediumEdit" class="radio-label">Media</label>
                                    </div>
                                </div>
                                <div class="container-item__column">
                                    <div class="radio-button">
                                        <input id="lowerEdit" name="prority" type="radio" value="Baja" v-model="itemData.priority" />
                                        <label for="lowerEdit" class="radio-label">Baja</label>
                                    </div>
                                </div>
                            </ValidationProvider>
                        </div>
                        <div class="container-item__row">
                            <div class="container-item__column">
                                <button class="m-button m-button-azure m-button-long" type="submit" @click="editItem()">Editar <font-awesome-icon icon="edit" /></button>
                            </div>
                        </div>
                    </form>
                </ValidationObserver    >
            </div>
        </div>
        <div class="modal__footer">
            <slot name="footer"></slot>
        </div>
     </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import moment from 'moment';
export default {
    name: "edit-item-modal",
    watch: {
        modalData(newVal){
            this.itemData = _.cloneDeep(newVal.data);
        }
    },
    props: {
        title: {
            type: String,
            default: ""
        },
        width: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            default: ""
        },
        action: {
            type: String,
            default: ""
        },
        subject: {
            type: String,
            default: ""
        },
        modalData: {
            type: Object,
            default: () => {}
        }
    },
    data: function(){
        return {
            itemData: []
        }
    },
    computed: {
        ...mapState('common', {
            'iconsData': (state) => (state.iconsData),
            'earningData': (state) => (state.earningData)
        }),
        verifyData(){
            let count = 0;
            return this.itemData.frequent && this.itemData.percentil && this.itemData.budget && this.itemData.priority && this.itemData.date && this.itemData.cost && this.itemData.thing ? true : false;
        },
        filterIcons(){
            switch(this.modalData.type){
                case 'savings':
                    return 'saving'
                break;
                case 'expenses':
                    return 'expense'
                break;
                case 'earnings':
                    return 'earning'
                break;
            }
        }
    },
    methods: {
        ...mapActions('common', [
            'updateItem',
            'updateEarningItem',
            'updateSavingItem',
            'updateModalData'
        ]), 
        editItem(){
            if(this.verifyData === false){
                switch(this.modalData.type){
                    case 'savings':
                        this.updateSavingItem(this.modalData);
                    break;
                    case 'expenses':
                        this.updateItem(this.modalData);
                    break;
                    case 'earnings':
                        this.updateEarningItem(this.modalData);
                    break;
                }
                this.updateModalData({
                    type: "",
                    title: "",
                    injectData: {}
                });
                document.querySelector(".overlay").classList.replace('show', 'hide');
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
    mounted(){
        this.itemData = this.modalData.data;
    }
}
</script>