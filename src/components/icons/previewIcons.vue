<template>
<ValidationObserver style="width: 30%" v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit(onSubmit())" class="container-item__column">
        <div class="container-item__row minify-padding">
            <div class="container-item__column flex-center">
                <div class="radio-button icons-category icons-category--bigger">
                    <input id="icon" class="categories-radio" name="category" type="radio" disabled/>
                    <label for="icon" >
                        <font-awesome-icon :icon="[previewIcon.prefix ? previewIcon.prefix : 'fas', previewIcon.iconName ? previewIcon.iconName : 'search']" :style=" {backgroundColor: previewIcon.class} "/>
                    </label>
                </div>
            </div>
        </div>
        <div class="container-item__row minify-padding">
             <ValidationProvider name="categoría" rules="string"  v-slot="{ errors }" class="container-item__column" >
                <label class="m-label">
                    Categoria:
                </label>
                <input type="text" class="custom-form" placeholder="Escriba la categoría" :disabled="avalible" v-model="previewIcon.category" />
                <span class="m-error">{{ errors[0] }}</span>
            </ValidationProvider>
        </div>
        <div class="container-item__row minify-padding">
                <div class="container-item__column--medium">
                <label class="m-label">
                    Color:
                </label>
            </div>
            <div name="prioridad" rules="text" class="container-item__column container-item__col-row minify-padding">
                <div class="container-item__column">
                    <color-picker v-model="previewIcon.class" :disabled="avalible"></color-picker>
                </div>
            </div>
        </div>
        <div class="container-item__row minify-padding">
            <div class="container-item__column" name="usuario" rules="radio">
                <label class="m-label">
                    Referencia:
                </label>
                <input type="text" class="custom-form" placeholder="Ingrese el usuario" :value="previewIcon.iconName" disabled/>
            </div>
        </div>
        <div class="container-item__row minify-padding">
            <div class="container-item__column" name="usuario" rules="radio">
                <div class="container-item__column">
                    <label class="m-label">
                        Tipo:
                    </label>
                </div>
                <div class="container-item__row">
                    <div class="container-item__column">
                        <div class="radio-button">
                            <input id="expense" name="type" type="radio" value="expense" v-model="previewIcon.type" :disabled="avalible"/>
                            <label for="expense" class="radio-label">Gastos</label>
                        </div>
                    </div>
                    <div class="container-item__column">
                        <div class="radio-button">
                            <input id="earnings" name="type" type="radio" value="earning" v-model="previewIcon.type" :disabled="avalible"/>
                            <label for="earnings" class="radio-label">Ingresos</label>
                        </div>
                    </div>
                    <div class="container-item__column">
                        <div class="radio-button">
                            <input id="savings" name="type" type="radio" value="saving" v-model="previewIcon.type" :disabled="avalible"/>
                            <label for="savings" class="radio-label">Ahorros</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-item__row minify-padding">
            <div class="container-item__column" v-if="toggle">
                <button class="m-button m-button-esmerald m-button-long" type="submit" @click="addNewIcon()">Guardar</button>
            </div>
            <div class="container-item__row" v-if="!toggle">
                <button class="m-button m-button-esmerald m-button-long" @click="updateAvalible(false)" v-if="avalible">Editar</button>
                <button class="m-button m-button-pink m-button-long" @click="deleteSelectIcon()" v-if="avalible">Eliminar</button>
            </div>
            <div class="container-item__row" v-if="!toggle && !avalible">
                <button class="m-button m-button-pink m-button-long" @click="cancelToggle()">Cancelar</button>
                <button class="m-button m-button-esmerald m-button-long" @click="updateSelectIcon()">Confirmar</button>
            </div>
        </div>
    </form>
</ValidationObserver>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
    name: "previewIcons",
    data: function(){
        return {
            comprobeData: false
        }
    },
    computed: {
        ...mapState('icons', {
            "previewIcon": (state) => (state.previewIcon),
            "toggle": (state) => (state.toggle),
            "avalible": (state) => (state.avalible)
        }),
        ...mapState('common', {
            "iconsData": (state) => (state.iconsData),
        })
    },
    methods: {
        cancelToggle(){
            this.updateToggle(true);
            this.updateAvalible(false);
        },
        ...mapActions('icons', [
            'updateAvalible',
            'updateToggle',
            'updatePreviewIcon'
        ]),
        ...mapActions('common', [
            'updateIconsData',
            'updateIcon',
            'deleteIcon'
        ]),
        onSubmit(){

        },
        updateSelectIcon(){
            if(this.previewIcon.category){
                this.updateIcon(this.previewIcon);
                this.updateAvalible(true);
            }
        },
        addNewIcon(){
            if(this.previewIcon.category){            
                this.updateIconsData(this.previewIcon);
                this.updateToggle(false);
                this.updateAvalible(true);   
            }
        },
        deleteSelectIcon(){
            this.deleteIcon(this.previewIcon);
            this.updatePreviewIcon(this.iconsData[0]);
            this.updateAvalible(true);
        }
    },
}
</script>