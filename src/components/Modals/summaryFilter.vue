<template>
    <div class="modal modal--big" :style="{width: width}">
        <div class="modal__header">
            <span class="m-title">{{title}}</span>
        </div>
        <div class="modal__body">
            <div class="container-item__row">
                <div class="container-item__column--medium">
                    <select v-model="filterOptions">
                        <option value="">Selecciona una opcion</option>
                        <option value="priority">Prioridad</option>
                        <option value="date">Fecha</option>
                        <option value="cost">Costos</option>
                        <option value="status">Estado</option>
                    </select>
                </div>
                <div v-if="filterOptions == 'priority'" class="container-item__column container-item__col-row">
                    <div class="container-item__column">
                        <div class="radio-button">
                            <input id="priorityHight" type="radio" value="Alta" v-model="filterData" />
                            <label for="priorityHight" class="radio-label">Alta</label>
                        </div>
                    </div>
                    <div class="container-item__column">
                        <div class="radio-button">
                            <input id="priorityMedium" type="radio" value="Media" v-model="filterData"/>
                            <label for="priorityMedium" class="radio-label">Media</label>
                        </div>
                    </div>
                    <div class="container-item__column">
                        <div class="radio-button">
                            <input id="priorityLower" type="radio" value="Baja" v-model="filterData"/>
                            <label for="priorityLower" class="radio-label">Baja</label>
                        </div>
                    </div>
                </div>
                <div v-if="filterOptions == 'date'" class="container-item__column container-item__col-row">
                    <div class="container-item__column">
                        <div class="radio-button">
                            <input id="recent" type="radio" value="Recent" v-model="filterData"/>
                            <label for="recent" class="radio-label">Reciente</label>
                        </div>
                    </div>
                    <div class="container-item__column">
                        <div class="radio-button">
                            <input id="older" type="radio" value="Older" v-model="filterData"/>
                            <label for="older" class="radio-label">Antiguedad</label>
                        </div>
                    </div>
                </div>
                <div v-if="filterOptions == 'cost'" class="container-item__column container-item__col-row">
                    <div class="container-item__column">
                        <div class="radio-button">
                            <input id="hightExpense" type="radio" value="Alto" v-model="filterData"/>
                            <label for="hightExpense" class="radio-label">Alto</label>
                        </div>
                    </div>
                    <div class="container-item__column">
                        <div class="radio-button">
                            <input id="lowExpense" type="radio" value="Bajo" v-model="filterData"/>
                            <label for="lowExpense" class="radio-label">Bajo</label>
                        </div>
                    </div>
                </div>
                <div v-if="filterOptions == 'status'" class="container-item__column container-item__col-row">
                    <div class="container-item__column">
                        <div class="radio-button">
                            <input id="uncheck" type="radio" value="Uncheck" v-model="filterData"/>
                            <label for="uncheck" class="radio-label">Uncheck</label>
                        </div>
                    </div>
                    <div class="container-item__column">
                        <div class="radio-button">
                            <input id="check" type="radio" value="Check" v-model="filterData"/>
                            <label for="check" class="radio-label">Finalizar</label>
                        </div>
                    </div>
                </div>
            </div>
            <transition-group class="container-item__row container-modal__summary" name="toggleList" tag="div">
                <div v-for="(data, index) in filteredData" :key="data" class="container-item__column">
                    <div class="card-status" :class="setColorPriority(data.priority)">
                        <div class="container-item__row">
                            <div class="container-item__column">
                                <span class="m-label">
                                    {{data.iconData.category}}
                                </span>
                                <span class="m-small">
                                    {{moment(data.date).format('ll')}}
                                </span>
                            </div>
                            <div class="container-item__column">
                                <div class="ellipsis__cont">
                                    <span class="ellipsis__button">
                                        <font-awesome-icon icon="ellipsis-v" />
                                    </span>
                                    <div class="ellipsis-container" >
                                        <div class="ellipsis-container__options">
                                            <span class="m-label" @click="unshiftArray(index)">
                                                Eliminar
                                            </span>
                                        </div>
                                        <div class="ellipsis-container__options">
                                            <span class="m-label" @click="checkArray(index)">
                                                Checkear
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container-item__row">
                            <div class="container-item__column">
                                <span class="icons-category">
                                    <font-awesome-icon :icon="data.iconData.iconName" :style="{backgroundColor: data.iconData.class}"/>
                                </span>
                            </div>
                            <div class="container-item__column">
                                <span class="m-paragraph">
                                    {{data.thing}}
                                </span>
                            </div>
                            <div class="container-item__column">
                                <span class="m-mini-paragraph">
                                    {{numeral(data.cost).format('$0,0')}}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </transition-group>
        </div>
        <div class="modal__footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
    name: "summary-filter",
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
        }
    },
    data: function(){
        return{
            filterOptions: "",
            arrayFiltered: [],
            filterData: ""
        }
    },
    watch: {
        filterData(newVal) {
            this.filteredData = newVal;
        },
        filterOptions(){
            this.filterData = "";
        }
    },
    computed: {
        ...mapState('common', [
            'itemsData'
        ]),
        filteredData: {
            set(value){
                this.getFilterArray(value);
            },
            get(){
                return this.arrayFiltered;
            }
        },
        returnArrayData(){
            return this.itemsData;
        }
    },
    methods: {
        ...mapActions('finance', [
            'deleteItemsData',
            'checkedItemsData'
        ]),
        setColorPriority(value) {
            switch (value){
                case 'Alta':
                    return 'priority-high';
                break;
                case 'Media':
                    return 'priority-medium';
                break;
                case 'Baja':
                    return 'priority-lower';
                break;
                case 'Check':
                    return 'priority-checked';
                break;
            }
        },
        getFilterArray(val){
            switch (val){
                case "Alta":
                    this.newFilterArray( "priority", "Alta", "Media", "Baja", "Check" );
                break;
                case "Baja":
                    this.newFilterArray( "priority", "Baja", "Media", "Alta", "Check" );
                break;
                case "Media":
                    this.newFilterArray( "priority", "Media", "Baja", "Alta", "Check" );
                break;
                case "Recent":
                    this.newFilterArray( "date", "Recent" );
                break;
                case "Older":
                    this.newFilterArray( "date", "Older" );
                break;
                case "Alto":
                    this.newFilterArray( "cost", "Alto" );
                break;
                case "Bajo":
                    this.newFilterArray( "cost", "Bajo" );
                break;
                case "Check":
                    this.newFilterArray( "priority",  "Check", "Alta", "Media", "Baja");
                break;
                case "Uncheck":
                    this.newFilterArray( "priority", "Alta", "Media", "Baja", "Check");
                break;
            }
        },
        newFilterArray(key, param1, param2, param3, param4){
            if(key === "priority"){
                let firtsArr, secondArr, thirdArr, fourArr;
                (param1 == "Check") && (fourArr = this.returnArrayData.filter(x => x[`${key}`] == param1));
                (param1) && (firtsArr = this.returnArrayData.filter(x => x[`${key}`] == param1));
                (param2) && (secondArr = this.returnArrayData.filter(x => x[`${key}`] == param2));
                (param3) && (thirdArr = this.returnArrayData.filter(x => x[`${key}`] == param3));
                (param4 == "Check") && (fourArr = this.returnArrayData.filter(x => x[`${key}`] == param4));
                this.arrayFiltered = [...firtsArr, ...secondArr, ...thirdArr, ...fourArr];
            } else if(key == "date"){
                let sortedArray = () => this.returnArrayData.sort((a, b) => {
                    var dateA = new Date(a.date);
                    var dateB = new Date(b.date);
                    return dateA - dateB;
                });
                param1 == "Older" ? this.arrayFiltered = sortedArray() : this.arrayFiltered = sortedArray().reverse();
            } else if (key == "cost") {
                let sortedArray = () => this.returnArrayData.sort((a, b) => {
                    return a.cost - b.cost;
                });
                param1 == "Bajo" ? this.arrayFiltered = sortedArray() : this.arrayFiltered = sortedArray().reverse();
            }
        },
        unshiftArray(index){
            this.deleteItemsData(index);
            this.arrayFiltered.splice(index, 1);
        },
        checkArray(index){
            this.checkedItemsData(index);
            this.arrayFiltered[index].priority = "Check";
        }
    },
    mounted(){
        this.arrayFiltered = _.cloneDeep(this.returnArrayData);
    }
}
</script>