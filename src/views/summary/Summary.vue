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
                                                            <font-awesome-icon :icon="array.iconName" :class="array.iconClass"/>
                                                            <span class="m-value-paragraph">{{array.categoryName}}</span>
                                                        </div>
                                                    </span>
                                                    <span class="m-small">${{numeral(array.totalExpenses).format('0,0')}} COP</span>
                                                </div>
                                            </div>
                                            <div class="m-card-body">
                                                <div class="container-item__row minify-padding">
                                                    <div class="indicator-container">
                                                        <div class="indicator--dynamic" :class="array.iconClass" :style="{width: numeral(setPercent(array.totalExpenses)).format('0.0').concat('%')}">
                                                            <span class="indicator--value m-label" :style="{color: setColor(setPercent(array.totalExpenses))}">{{numeral(setPercent(array.totalExpenses)).format('0.0')}}%</span>
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
                                                            <font-awesome-icon :icon="array.iconName" :class="array.iconClass"/>
                                                            <span class="m-value-paragraph">{{array.categoryName}}</span>
                                                        </div>
                                                    </span>
                                                    <span class="m-small">${{numeral(array.totalExpenses).format('0,0')}} COP</span>
                                                </div>
                                            </div>
                                            <div class="m-card-body">
                                                <div class="container-item__row minify-padding">
                                                    <div class="indicator-container">
                                                        <div class="indicator--dynamic" :class="array.iconClass" :style="{width: numeral(setPercent(array.totalExpenses)).format('0.0').concat('%')}">
                                                            <span class="indicator--value m-label" :style="{color: setColor(setPercent(array.totalExpenses))}">{{numeral(setPercent(array.totalExpenses)).format('0.0')}}%</span>
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
            fontAwesomeIcons: [],
            summaryExpenses: [

            ],
            categoryData : {
                activeCategories: [],
                categoriesData: []
            },
            totalExpenses: 0
        }
    },
    computed: {
        ...mapGetters('finance', [
            'getItemsData',
            'getBudgetData'
        ])
    },
    watch: {
        summaryExpenses(newVal){
            newVal.forEach(x => {
                this.totalExpenses += x.totalExpenses;
            })
        }
    },
    methods: {
        getTraduceData(){
            this.categoryData.categoriesData = [];

            this.getItemsData.forEach(x => {
                if(!this.categoryData.activeCategories.includes(x.iconData.category)){
                    this.categoryData.activeCategories.push(x.iconData.category);
                }
            });

            this.categoryData.activeCategories.forEach(x => {
                this.categoryData.categoriesData.push({categoryName: x});
            });

            this.getItemsData.forEach( x => {
                this.categoryData.categoriesData.forEach(z => {
                    z.totalExpenses = 0;
                    z.iconName = '';
                });
            });

            this.categoryData.activeCategories.forEach( (x, index) => {
                this.getItemsData.forEach(z => {
                    if(z.iconData.category == x){
                        this.categoryData.categoriesData[index].iconName = z.iconData.name;
                        this.categoryData.categoriesData[index].iconClass = z.iconData.class;
                        this.categoryData.categoriesData[index].totalExpenses += parseInt(z.cost);
                    }
                })
            });
        },
        splitArray(val) {
            return val ? this.categoryData.categoriesData.slice(0, (this.categoryData.categoriesData.length / 2)) 
                    : this.categoryData.categoriesData.slice( (this.categoryData.categoriesData.length / 2), this.categoryData.categoriesData.length)
        },
        setPercent(value){
            return (value * 100) / this.totalExpenses;
        },
        setColor(value){
            return app.numeral(value).format('0,0') <= 10 ? '#545454' : '#FAFAFA'
        }
    },
    mounted() {
        this.getTraduceData();
        this.summaryExpenses = this.categoryData.categoriesData;
    }
}
</script>