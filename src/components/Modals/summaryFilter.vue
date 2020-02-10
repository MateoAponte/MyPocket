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
                                    <font-awesome-icon :icon="data.iconData.name" :class="data.iconData.class"/>
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
            arrayData: [
                {"thing":"Universidad","cost":"500000","priority":"Alta","date":"2019/11/25","iconData":{"category":"Tecnología","name":"mobile-alt","class":"tecnology-icon"}},
                {"thing":"Celular","cost":"250000","priority":"Alta","date":"2019/11/25","iconData":{"category":"Banco & Transacciones","name":"money-bill-wave","class":"money-icon"}},
                {"thing":"Bicicleta","cost":"167000","priority":"Alta","date":"2019/11/25","iconData":{"category":"Banco & Transacciones","name":"money-bill-wave","class":"money-icon"}},
                {"thing":"Comida","cost":"100000","priority":"Media","date":"2019/11/26","iconData":{"category":"Comida","name":"utensils","class":"food-icon"}},
                {"thing":"Transporte","cost":"80000","priority":"Media","date":"2019/11/26","iconData":{"category":"Viajes","name":"plane","class":"plane-icon"}},
                {"thing":"Canastas","cost":"300000","priority":"Alta","date":"2019/11/26","iconData":{"category":"Comida","name":"utensils","class":"food-icon"}},
                {"thing":"Instituto","cost":"150000","priority":"Alta","date":"2019/11/26","iconData":{"category":"Banco & Transacciones","name":"money-bill-wave","class":"money-icon"}},
                {"thing":"Otros","cost":"50000","priority":"Baja","date":"2019/11/27","iconData":{"category":"Comida","name":"utensils","class":"food-icon"}},
                {"thing":"Audifonos (Balaca)","cost":"80000","priority":"Media","date":"2019/11/27","iconData":{"category":"Tecnología","name":"mobile-alt","class":"tecnology-icon"}},
                {"thing":"Audifonos (Balaca)","cost":"80000","priority":"Media","date":"2019/11/27","iconData":{"category":"Moda","name":"tshirt","class":"clothes-icon"}}
            ],
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
        },
        arrayFiltered(newVal){
            newVal.forEach(x => {
                x.id =  _.random(0, 1000)
            });
        }
    },
    computed: {
        filteredData: {
            set(value){
                this.getFilterArray(value);
            },
            get(){
                return this.arrayFiltered;
            }
        }
    },
    methods: {
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
            }
        },
        getFilterArray(val){
            switch (val){
                case "Alta":
                    this.newFilterArray( "priority", "Alta", "Media", "Baja" );
                break;
                case "Baja":
                    this.newFilterArray( "priority", "Baja", "Media", "Alta" );
                break;
                case "Media":
                    this.newFilterArray( "priority", "Media", "Baja", "Alta" );
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
            }
        },
        newFilterArray(key, param1, param2, param3){
            if(key === "priority"){
                let firtsArr, secondArr, thirdArr;
                (param1) && (firtsArr = this.arrayData.filter(x => x[`${key}`] == param1));
                (param2) && (secondArr = this.arrayData.filter(x => x[`${key}`] == param2));
                (param3) && (thirdArr = this.arrayData.filter(x => x[`${key}`] == param3));
                this.arrayFiltered = [...firtsArr, ...secondArr, ...thirdArr];
            } else if(key == "date"){
                let sortedArray = () => this.arrayData.sort(function compare(a, b) {
                    var dateA = new Date(a.date);
                    var dateB = new Date(b.date);
                    return dateA - dateB;
                });
                param1 == "Older" ? this.arrayFiltered = sortedArray() : this.arrayFiltered = sortedArray().reverse();
            } else if (key == "cost") {
                let sortedArray = () => this.arrayData.sort(function compare(a, b) {
                    return a.cost - b.cost;
                });
                param1 == "Bajo" ? this.arrayFiltered = sortedArray() : this.arrayFiltered = sortedArray().reverse();
            }
        },
        unshiftArray(index){
            this.arrayData.splice(index, 1);
            this.arrayFiltered.splice(index, 1);
        }
    },
    mounted(){
        this.arrayFiltered = _.cloneDeep(this.arrayData);
    }
}
</script>