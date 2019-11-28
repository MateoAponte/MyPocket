<template>
    <div class="m-general-container">
        <div class="m-head-container">
            <div class="m-head-container-card">
                <div class="m-container-item--row">
                    <div class="m-container-item--column">
                        <label class="m-label">
                            En que:
                        </label>
                        <input type="text" class="custom-form" placeholder="Ejm. Libros">
                    </div>
                    <div class="m-container-item--column">
                        <label class="m-label">
                            Cuando:
                        </label>
                        <input type="text" class="custom-form" placeholder="Ejm. 400000">
                    </div>
                </div>
                <div class="m-container-item--row">
                    <div class="m-container-item--column--medium">
                        <label class="m-label">
                            Prioridad:
                        </label>
                    </div>
                    <div class="m-container-item--column m-container-item--col-row">
                        <div class="m-container-item--column">
                            <div class="radio-button">
                                <input id="hight" name="radio" type="radio">
                                <label for="hight" class="radio-label">Alta</label>
                            </div>
                        </div>
                        <div class="m-container-item--column">
                            <div class="radio-button">
                                <input id="medium" name="radio" type="radio">
                                <label for="medium" class="radio-label">Media</label>
                            </div>
                        </div>
                        <div class="m-container-item--column">
                            <div class="radio-button">
                                <input id="lower" name="radio" type="radio">
                                <label for="lower" class="radio-label">Baja</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="m-container-item--row">
                    <button class="m-button m-button-turquese">Guardar</button>
                    <button class="m-button m-button-orange">Agregar</button>
                </div>
            </div>
        </div>

        <div class="m-container">
            <div class="m-container-row">
                <div class="m-container-row m-container-anormal">
                    <div class="m-container-column">
                        <div class="m-card">
                            <div class="m-card-header">
                                <div class="m-container-item--row">
                                    <label class="m-title">
                                        Lista:
                                    </label>
                                    <button class="m-button m-button-orange">Mostrar Todos</button>
                                </div>
                            </div>
                            <div class="m-card-body">
                                <div class="m-container-item" v-for="data in userData" :key="data">
                                    <div class="m-container-item--status">
                                        <span :class="setColorPriority(data.priority)">
                                            <font-awesome-icon icon="flag" />
                                        </span>
                                    </div>
                                    <div class="m-container-item--info">
                                        <div class="m-container-item--info--column">
                                            <div class="m-container-item--info__item">
                                                <span class="m-container-item--info__item__title">
                                                    {{data.thing}}
                                                </span>
                                                <span class="m-container-item--info__item__value">
                                                    {{moment(data.date).format('YYYY/MM/DD')}}
                                                </span>
                                            </div>
                                        </div>
                                        <div class="m-container-item--info--column">
                                            <div class="m-container-item--info__item centered-content">
                                                <span class="m-container-item--info__item__title">
                                                    {{numeral(setPercent(data.cost)).format('0.00')}}%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="m-container-item--value">
                                        <div class="m-container-item--value--row">
                                            <span class="m-container-item--value__title">
                                                {{numeral(data.cost).format('$0,0')}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="m-container-column">
                        <div class="m-card">
                            <div class="m-card-header">
                                <div class="m-container-item--row">
                                    <label class="m-title">
                                        Información
                                    </label>
                                </div>
                            </div>
                            <div class="m-card-body space-around">
                                <div class="m-container-item--row minify-padding">
                                    <label class="m-title">
                                        Presupuesto:
                                    </label>
                                    <label class="m-title">
                                        {{numeral(setBudget).format('$0,0')}}
                                    </label>
                                </div>
                                <div class="m-container-item--row minify-padding">
                                    <label class="m-title">
                                        Descuento:
                                    </label>
                                    <label class="m-title">
                                        {{numeral(setPercentil).format('$0,0')}}
                                    </label>
                                </div>
                                <div class="m-container-item--row minify-padding">
                                    <label class="m-title">
                                        Gastos:
                                    </label>
                                    <label class="m-title">
                                        {{numeral(setExpenses).format('$0,0')}}
                                    </label>
                                </div>
                                <div class="m-container-item--row minify-padding">
                                    <label class="m-title">
                                        Sobrante:
                                    </label>
                                    <label class="m-title">
                                        {{numeral(setRes).format('$0,0')}}
                                    </label>
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
export default {
    data: function(){
        return {
            userData: [
                {
                    "thing": "Prueba",
                    "cost": "500000",
                    "priority": "Alta",
                    "date": "2019/11/27",
                }, {
                    "thing": "Prueba",
                    "cost": "250000",
                    "priority": "Alta",
                    "date": "2019/11/27",
                }, {
                    "thing": "Prueba",
                    "cost": "167000",
                    "priority": "Alta",
                    "date": "2019/11/27",
                }, {
                    "thing": "Prueba",
                    "cost": "100000",
                    "priority": "Media",
                    "date": "2019/11/27",
                }, {
                    "thing": "Prueba",
                    "cost": "80000",
                    "priority": "Media",
                    "date": "2019/11/27",
                }, {
                    "thing": "Prueba",
                    "cost": "300000",
                    "priority": "Alta",
                    "date": "2019/11/27",
                }, {
                    "thing": "Prueba",
                    "cost": "150000",
                    "priority": "Alta",
                    "date": "2019/11/27",
                }, {
                    "thing": "Prueba",
                    "cost": "50000",
                    "priority": "Baja",
                    "date": "2019/11/27",
                }, {
                    "thing": "Prueba",
                    "cost": "80000",
                    "priority": "Media",
                    "date": "2019/11/27",
                }
            ],
            summaryData:{
                budget: 10000,
                expenses: 0,
                percentil: 8
            }
        }
    },
    methods: {
        setColorPriority(value) {
            switch (value){
                case 'Alta':
                    return 'm-container-item--status--hight';
                break;
                case 'Media':
                    return 'm-container-item--status--medium';
                break;
                case 'Baja':
                    return 'm-container-item--status--lower';
                break;
            }
        },
        setPercent(value){
            return (value * 100) / this.summaryData.budget;
        }
    },
    computed: {
        setExpenses(){
            this.userData.forEach( x => {
                this.summaryData.expenses += parseInt(x.cost);
            } );
            return this.summaryData.expenses;
        },
        setBudget(){
            return this.summaryData.budget;
        },
        setPercentil(){
            return this.summaryData.budget * (this.summaryData.percentil / 100);
        },
        setRes(){
            return this.setBudget - this.setExpenses;
        }
    }
}
</script>