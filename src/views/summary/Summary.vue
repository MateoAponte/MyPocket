<template>
    <div class="m-general-container">
        <div class="m-container">
            <div class="m-container-row">
                <div class="m-container-column">
                    <div class="m-card">
                        <div class="m-card-header">
                            <div class="container-item__row">
                                <span class="m-title-big">
                                    Resumen
                                </span>
                            </div>
                        </div>
                        <div class="m-card-body summary-container">
                            <div class="container-item__row flex-center">
                                <div class="container-item__column">
                                    <div v-for="(array, index) in splitArray(true)" :key="index" class="container-item__row minify-padding">
                                        <div class="m-card">
                                            <div class="m-card-header min-height">
                                                <div class="container-item__row vertical-center">
                                                    <span class="m-title-big">
                                                        <div class="icons-category--medium flex-center">                                                
                                                            <font-awesome-icon :icon="array.iconData.name" :style="{ backgroundColor: array.iconData.class }"/>
                                                            <span class="m-value-paragraph">{{array.iconData.category}}</span>
                                                        </div>
                                                    </span>
                                                    <span class="m-small">${{numeral(array.cost).format('0,0')}} COP</span>
                                                </div>
                                            </div>
                                            <div class="m-card-body">
                                                <div class="container-item__row minify-padding">
                                                    <div class="indicator-container">
                                                        <div class="indicator--dynamic" :style="{width: numeral(setPercent(array.cost)).format('0.0').concat('%'), backgroundColor: array.iconData.class }">
                                                            <span class="indicator--value m-label" :style="{color: setColor(setPercent(array.cost))}">{{numeral(setPercent(array.cost)).format('0.0')}}%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="container-item__column">
                                    <div v-for="(array, index) in splitArray(false)" :key="index" class="container-item__row minify-padding">
                                        <div class="m-card">
                                            <div class="m-card-header min-height">
                                                <div class="container-item__row vertical-center">
                                                    <span class="m-title-big">
                                                        <div class="icons-category--medium flex-center">                                                
                                                            <font-awesome-icon :icon="array.iconData.name" :style="{ backgroundColor: array.iconData.class}"/>
                                                            <span class="m-value-paragraph">{{array.iconData.category}}</span>
                                                        </div>
                                                    </span>
                                                    <span class="m-small">${{numeral(array.cost).format('0,0')}} COP</span>
                                                </div>
                                            </div>
                                            <div class="m-card-body">
                                                <div class="container-item__row minify-padding">
                                                    <div class="indicator-container">
                                                        <div class="indicator--dynamic" :style="{width: numeral(setPercent(array.cost)).format('0.0').concat('%'), backgroundColor: array.iconData.class }">
                                                            <span class="indicator--value m-label" :style="{color: setColor(setPercent(array.cost))}">{{numeral(setPercent(array.cost)).format('0.0')}}%</span>
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
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data: function(){
        return {
            summaryExpenses: [

            ],
            categoriesData: [],
            totalExpenses: 0
        }
    },
    computed: {
        ...mapGetters('finance', [
            'getItemsData',
            'getBudgetData'
        ]),
        getTraduceData(){
            var result = this.getItemsData.reduce(function(acc, val){
            var o = acc.filter(function(obj){
                    return obj.iconData.category == val.iconData.category;
                }).pop() || {...val, cost:0};
                
                o.cost += parseInt(val.cost);
                acc.push(o);
                return acc;
            },[]);

            var finalresult = result.filter(function(itm, i, a) {
                return i == a.indexOf(itm);
            });
            this.categoriesData = finalresult;
        }
    },
    watch: {
        summaryExpenses(newVal){
            newVal.forEach(x => {
                this.totalExpenses += x.cost;
            })
        }
    },
    methods: {
        splitArray(val) {
            return val ? this.categoriesData.slice(0, (this.categoriesData.length / 2)) 
                    : this.categoriesData.slice( (this.categoriesData.length / 2), this.categoriesData.length)
        },
        setPercent(value){
            return (value * 100) / this.totalExpenses;
        },
        setColor(value){
            return app.numeral(value).format('0,0') <= 10 ? '#545454' : '#FAFAFA'
        }
    },
    mounted() {
        this.getTraduceData;
        this.summaryExpenses = this.categoriesData;
    }
}
</script>