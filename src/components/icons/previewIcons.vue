<template>
<ValidationObserver style="width: 30%" v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit(onSubmit())" class="container-item__column">
        <div class="container-item__row minify-padding">
            <div class="container-item__column flex-center">
                <div class="radio-button icons-category icons-category--bigger">
                    <input id="icon" class="categories-radio" name="category" type="radio" disabled/>
                    <label for="icon" >
                        <font-awesome-icon :icon="[previewIcon.prefix, previewIcon.iconName]" :style=" {backgroundColor: previewIcon.class} "/>
                    </label>
                </div>
            </div>
        </div>
        <div class="container-item__row minify-padding">
             <ValidationProvider class="container-item__column" name="categoría" rules="string"  v-slot="{ errors }">
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
            <div class="container-item__column" v-if="toggle">
                <button class="m-button m-button-esmerald m-button-long" type="submit" @click="addNewIcon()">Guardar</button>
            </div>
            <div class="container-item__column" v-if="!toggle">
                <button class="m-button m-button-esmerald m-button-long" @click="updateAvalible(false)" v-if="avalible">Editar</button>
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
            'updateIconsData',
            'updateIcon'
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
        }
    },
}
</script>