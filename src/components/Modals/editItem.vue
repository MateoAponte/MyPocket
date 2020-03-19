<template>
     <div class="modal modal--big modal-edit" :style="{width: width}">
        <div class="modal__header">
            <span class="m-title">{{title}}</span>
        </div>
        <div class="modal__body">
            <div class="container-item__row minify-padding">
                <!-- <div class="container-item__column">
                    <div class="container-item__row">
                        <div class="m-title-big">
                            {{itemData.thing}}
                        </div>
                    </div>
                    <div class="container-item__row">
                        <div class="container-item__column">
                            <div class="icons-category--medium-big">
                                <font-awesome-icon :icon="itemData.iconData.iconName" :style="{ backgroundColor: itemData.iconData.class }" />
                            </div>
                        </div>
                        <div class="container-item__column">
                            <span class="m-title-big">
                                {{itemData.iconData.category}}
                            </span>
                        </div>
                    </div>
                     <div class="container-item__row">
                        <div class="container-item__column">
                            <div class="m-title-big">Gasto</div>
                            <span class="m-label">
                                {{numeral(itemData.cost).format("$0,0")}}
                            </span>
                        </div>
                    </div>
                    <div class="container-item__row">
                        <div class="container-item__column">
                            <div class="m-title-big">Gasto</div>
                            <span class="m-label">
                                {{numeral(itemData.cost).format("$0,0")}}
                            </span>
                        </div>
                        <div class="container-item__column">
                            <div class="m-title-big">Descuento</div>
                            <span class="m-label">
                                0.08%
                            </span>
                        </div>
                    </div>
                    <div class="container-item__row">
                        <div class="container-item__column">
                            <div class="m-title-big">Frecuencia</div>
                            <span class="m-label">
                                Cada mes
                            </span>
                        </div>
                        <div class="container-item__column">
                            <div class="m-title-big">Fecha</div>
                            <span class="m-label">
                                Inicio: 2020/02/14
                            </span>
                            <span class="m-label">
                                Final: 2020/04/05
                            </span>
                        </div>
                    </div>
                    <div class="container-item__row">
                        <div class="container-item__column">
                            <div class="m-title-big">Estado</div>
                            <span class="m-label">
                                Check
                            </span>
                        </div>
                        <div class="container-item__column">
                            <div class="m-title-big">Prioridad</div>
                            <span class="m-label">
                                {{itemData.priority}}
                            </span>
                        </div>
                    </div>
                </div> -->
                <!-- <div class="container-item__column--long"> -->
                <ValidationObserver class="container-item__column minify-padding"  v-slot="{ handleSubmit }">
                    <!-- <ValidationObserver class="container-item__row" v-slot="{ handleSubmit }"> -->
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
                                    <dropdown-categorys type="edit" :select="itemData.iconData" :data="iconsData" v-model="itemData.iconData" />
                                    <span class="m-error relative" style="left: 0; bottom: -5px">{{errors[0]}}</span>
                                </ValidationProvider>
                            </div>
                            <div class="container-item__row vertical-center minify-padding" v-if="modalData.type === 'expenses'">
                                <ValidationProvider name="expense" rules="number" v-slot="{ errors }"  class="container-item__column">
                                    <label class="m-label">
                                        Costo:
                                    </label>
                                    <input type="text" class="custom-form" placeholder="Ingrese su presupuesto" v-model="itemData.cost" />
                                    <span class="m-error relative" style="left: 0; bottom: -5px">{{errors[0]}}</span>
                                </ValidationProvider>
                            </div>
                             <div class="container-item__row minify-padding" v-if="modalData.type === 'earnings'">
                                <ValidationProvider name="descuento" rules="number" v-slot="{ errors }"  class="container-item__column">
                                    <label class="m-label">
                                        Descuento:
                                    </label>
                                    <input type="text" class="custom-form" placeholder="Ingrese su presupuesto" v-model="itemData.budget" />
                                    <span class="m-error relative" style="left: 0; bottom: -5px">{{errors[0]}}</span>
                                </ValidationProvider>
                                <ValidationProvider name="expense" rules="number" v-slot="{ errors }"  class="container-item__column--mini">
                                    <label class="m-label">
                                        Gasto:
                                    </label>
                                    <input type="text" class="custom-form" placeholder="0%" v-model="itemData.percentil" />
                                    <span class="m-error relative" style="left: 0; bottom: -5px">{{errors[0]}}</span>
                                </ValidationProvider>
                            </div>
                             <div class="container-item__row minify-padding">
                                <ValidationProvider name="expense" rules="string" v-slot="{ errors }"  class="container-item__column--mini">
                                    <label class="m-label">
                                        Frecuencia:
                                    </label>
                                    <input type="text" class="custom-form" placeholder="0%" v-model="itemData.frequent" />
                                    <span class="m-error relative" style="left: 0; bottom: -5px">{{errors[0]}}</span>
                                </ValidationProvider>
                                <ValidationProvider name="descuento" rules="string" v-slot="{ errors }"  class="container-item__column">
                                    <label class="m-label">
                                        Fecha:
                                    </label>
                                    <input type="text" class="custom-form" placeholder="Ingrese su presupuesto" v-model="itemData.date" />
                                    <span class="m-error relative" style="left: 0; bottom: -5px">{{errors[0]}}</span>
                                </ValidationProvider>
                            </div>
                            <div class="container-item__row minify-padding">
                                <div class="container-item__column--medium" v-if="modalData.type === 'expenses'">
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
                    <!-- </ValidationObserver> -->
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
export default {
    name: "edit-item-modal",
    watch: {
        modalData(newVal){
            this.itemData = _cloneDeep(newVal.data);
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
            'iconsData': (state) => (state.iconsData)
        }),
        getIconSections(){
            return _.chunk(_.cloneDeep(this.iconsData), 4);
        },
        verifyData(){
            let count = 0;
            return this.itemData.frequent && this.itemData.percentil && this.itemData.budget && this.itemData.priority && this.itemData.date && this.itemData.cost && this.itemData.thing ? true : false;
        }
    },
    methods: {
        ...mapActions('common', [
            'updateItem',
            'updateModalData'
        ]), 
        editItem(){
            if(this.verifyData === false){
                this.updateItem(this.modalData);
                this.updateModalData({
                    type: "",
                    title: "",
                    injectData: {}
                });
                document.querySelector(".overlay").classList.replace('show', 'hide');
            }
        }
    },
    mounted(){
        this.itemData = this.modalData.data;
    }
}
</script>