<template>
    <div class="m-general-container">
        <div class="m-container summary-container">
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
                        <div class="m-card-body">
                            <div class="container-item__row flex-center">
                                <div class="container-item__column">
                                    <div v-for="(array, index) in splitArray(true)" :key="index" class="container-item__row minify-padding">
                                        <div class="m-card" @click="showSummaryCategory(array)">
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
                                        <div class="m-card"  @click="showSummaryCategory(array)">
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
            <div class="m-container-row" v-if="selectedArray.iconData">
                <span class="m-dropdown-icon">
                    <font-awesome-icon icon="chevron-circle-up" @click="dropdownToggle = !dropdownToggle" :style="{ transform: dropdownToggle ? 'rotate(180deg)' : 'rotate(360deg)' }"/>
                </span>
                <transition name="slide-down"> 
                    <div class="m-card" v-if="dropdownToggle">
                        <div class="m-card-body">
                            <div class="container-item__row flex-center">
                                <div class="container-item__column simple-column-right">
                                    <span class="m-title-big">
                                        Gastos:
                                    </span>
                                </div>
                                <div class="container-item__column simple-column-left">
                                    <span class="m-label">
                                        {{selectedArray.iconData.category}}
                                    </span>
                                </div>
                            </div>
                            <div class="container-item__column">
                                <div class="container-item__row flex-center" v-for="(arr, index) in selectedArray.categoryData" :key="index">
                                    <div class="container-item__column">
                                        <div class="m-card--unic" :style="{ border: '1.5px solid ' + hex2rgba(arr.iconData.class, 0.55) }">
                                            <div class="m-card__icon" :style="{ backgroundColor: hex2rgba(arr.iconData.class, 0.4) }">
                                                <font-awesome-icon :icon="arr.iconData.name" :style="{ color: hex2rgba(arr.iconData.class, 0.9) }"/>
                                                <span class="m-title-big" :style="{ color: hex2rgba(arr.iconData.class, 0.9) }">
                                                    {{arr.thing}}
                                                </span>
                                                <span class="m-value-light" :style="{ color: hex2rgba(arr.iconData.class, 0.9) }">
                                                    {{moment(arr.date).format('ll')}}
                                                </span>
                                            </div>
                                            <div class="m-card__content" :style="{ backgroundColor: hex2rgba(arr.iconData.class, 0.15) }">
                                                <span class="m-paragraph">
                                                    {{numeral(arr.cost).format("$0,0")}}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data: function(){
        return {
            summaryExpenses: [],
            categoriesData: [],
            totalExpenses: 0,
            selectedArray: [],
            dropdownToggle: false
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

            finalresult.map(x => {
                x.categoryData = this.getItemsData.filter(y => {
                    return  x.iconData.category == y.iconData.category;
                })
            })
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
        },
        showSummaryCategory(array){
            this.selectedArray = array;
            setTimeout(() => {
                this.dropdownToggle = true;
            }, 10)
        },
        hex2rgba(str, alpha) {
            var num = parseInt(str.slice(1), 16); // Convert to a number
            var arrRgb = [num >> 16 & 255, num >> 8 & 255, num & 255, num >> 24 & 255];
            return `rgba(${arrRgb[0]},${arrRgb[1]},${arrRgb[2]},${alpha})`;
        }
    },
    mounted() {
        this.getTraduceData;
        this.summaryExpenses = this.categoriesData;
    }
}
</script>