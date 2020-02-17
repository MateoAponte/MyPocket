<template>
    <div class="m-general-container">
        <div class="m-container">
            <div class="m-container-row">
                <div class="m-container-column">
                    <div class="m-card">
                        <div class="m-card-body icons-container">
                            <div class="container-item__row">
                                <div class="container-item__column">
                                    <div class="container-item__row search-icons__input">
                                        <input type="text" class="custom-form" v-model="filterValue">
                                        <span class="search-icons__icon">
                                            <font-awesome-icon icon="search"/>
                                        </span>
                                    </div>
                                    <div class="container-item__row flex-wrap">
                                        <div class="container-item__column" v-for="(icon, index) in copyIconsArr" :key="index">
                                            <div class="icons-category__block" @click="selectIcon(icon)">
                                                <div class="icons-category__block--item">
                                                    <font-awesome-icon :icon="[icon.prefix, icon.iconName]"/>
                                                </div>
                                                <div class="icons-category__block--title">
                                                    <span class="m-paragraph">{{icon.iconName}}</span>
                                                </div>
                                            </div>
                                        </div> 
                                        <div class="container-item__column" v-if="copyIconsArr.length <= 0">
                                            <span class="m-title-big">No se encontraron resultados...</span>
                                            <img src="@Assets/img/search_engine.svg" alt="" height="350">
                                        </div>
                                    </div>
                                    <div class="container-item__column">
                                        <span class="m-link m-link--special" v-if="copyIconsArr.length >= 15 && copyIconsArr.length != (totalData.length - 1)" @click="addIcons()">Cargar mas Iconos...</span>
                                    </div>
                                </div>
                                <div class="container-item__column">
                                    <div class="container-item__row minify-padding">
                                        <div class="container-item__column flex-center" name="usuario" rules="radio">
                                            <div class="radio-button icons-category icons-category--bigger">
                                                <input id="icon" class="categories-radio" name="category" type="radio" disabled/>
                                                <label for="icon" >
                                                    <font-awesome-icon :icon="[iconsSelect.prefix, iconsSelect.name]" :style=" {backgroundColor: iconsSelect.class} "/>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="container-item__row minify-padding">
                                        <div class="container-item__column" name="usuario" rules="radio">
                                            <label class="m-label">
                                                Categoria:
                                            </label>
                                            <input type="text" class="custom-form" placeholder="Escriba la categoría" v-model="iconsSelect.category"/>
                                        </div>
                                    </div>
                                    <div class="container-item__row minify-padding">
                                         <div class="container-item__column--medium">
                                            <label class="m-label">
                                                Color:
                                            </label>
                                        </div>
                                        <div name="prioridad" rules="text" class="container-item__column container-item__col-row minify-padding">
                                            <div class="container-item__column">
                                                <color-picker v-model="iconsSelect.class"></color-picker>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="container-item__row minify-padding">
                                        <div class="container-item__column" name="usuario" rules="radio">
                                            <label class="m-label">
                                                Referencia:
                                            </label>
                                            <input type="text" class="custom-form" placeholder="Ingrese el usuario" :value="iconsSelect.name" disabled/>
                                        </div>
                                    </div>
                                    <div class="container-item__row minify-padding">
                                        <div class="container-item__column">
                                            <button class="m-button m-button-esmerald m-button-long">Guardar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ColorPicker from '@Components/common/colorPicker';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

export default {
    name: "icons-config",
    components: {
        ColorPicker
    },
    data() {
        return{
            iconsArr: [],
            totalData: [],
            copyIconsArr: [],
            iconsSelect: {
                category: "",
                name: "",
                prefix: "",
                class: "#739AFF"
            },
            stepCharge: 15,
            filterValue: ""
        }
    },
    watch: {
        stepCharge(){
            this.copyIconsArr = [];
            this.copyIconsArr.push(...Object.values(_.cloneDeep(this.totalData)).splice(1,this.stepCharge));
        },
        filterValue(newVal){
            this.stepCharge = 15;
            this.totalData = [];
            if(newVal){
                let arr = Object.values(this.iconsArr[0]);
                arr = arr.filter(x => {
                    return x.iconName.includes(newVal);
                });
                this.totalData.push(...Object.values(arr));
            } else {
                this.totalData.push(...Object.values(_.cloneDeep(this.iconsArr[0])));
            }
        },
        totalData(newVal){  
            this.copyIconsArr = [];
            this.copyIconsArr.push(...Object.values(_.cloneDeep(this.totalData)).splice(1,this.stepCharge));
        }
    },
    methods: {
        selectIcon(icon){
            this.iconsSelect.name = icon.iconName;
            this.iconsSelect.prefix = icon.prefix;
        },
        addIcons(){
            this.stepCharge += 15;
        }
    },
    mounted(){
        this.iconsArr.push( { ...fas, ...fab });
        this.iconsSelect.category = "";
        this.iconsSelect.name = this.iconsArr[0].faAd.iconName;
        this.iconsSelect.prefix = this.iconsArr[0].faAd.prefix;
        this.iconsSelect.class = "#739AFF";
        this.totalData.push(...Object.values(_.cloneDeep(this.iconsArr[0])));
    }
}
</script>