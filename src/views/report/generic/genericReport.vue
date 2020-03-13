<template>
    <div class="m-general-container">
        <div class="m-container generic-report-container">
            <div class="m-container-row">
                <div class="m-container-column">
                    <div class="m-card">
                        <div class="m-card-header">
                            <div>
                                <span class="m-title-big">
                                    Reporteria
                                </span>
                                <span class="m-small">
                                    (Año actual)
                                </span>
                            </div>
                            
                            <report-tabs ref="reportTabs" />

                        </div>
                        <div class="m-card-body">
                            <div class="container-item__row flex-center">
                                <div class="container-item__column">
                                    <pie-chart v-if="itemData === 'generic'" :data="categoriesData" label="Value" ref="pie-chart" type="watcher" @updateChart="toggleClass(elementTarget.event, elementTarget)"></pie-chart>
                                    <x-axis-chart v-else :data="xChartData" ref="x-axis-chart"></x-axis-chart>
                                </div>
                            </div>
                            <div class="container-item__row">
                                <span class="m-title-big">
                                    Resumen Anual:
                                </span>
                            </div>
                            <div class="container-item__row">
                                <div class="container-item__column--medium">
                                    <label class="m-label">
                                        Prioridad:
                                    </label>
                                </div>
                                <div class="container-item__column container-item__col-row">
                                    <div class="container-item__column">
                                        <div class="radio-button">
                                            <input id="generic" name="typeChart" type="radio" value="generic" v-model="itemData" />
                                            <label for="generic" class="radio-label">Generico</label>
                                        </div>
                                    </div>
                                    <div class="container-item__column">
                                        <div class="radio-button">
                                            <input id="detailed" name="typeChart" type="radio" value="detailed" v-model="itemData" />
                                            <label for="detailed" class="radio-label">Detallado</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="container-item__row">
                                
                                <report-summary-left-card />

                                <report-summary-right-card />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        mapGetters, mapActions, mapState
    } from 'vuex';
    import reportTabs from '@Components/report/generic/reportTabs';
    import reportSummaryRightCard from '@Components/report/generic/reportSummaryRightCard';
    import reportSummaryLeftCard from '@Components/report/generic/reportSummaryLeftCard';

    export default {
        name: "generic-report",
        components: {
            reportTabs,
            reportSummaryRightCard,
            reportSummaryLeftCard
        },
        data: function () {
            return {
                eventData: {},
                itemData: 'generic',
                xChartData: []
            }
        },
        watch: {
            categoriesData(){
                this.$refs['pie-chart'] ? this.$refs['pie-chart'].destroy() : setTimeout(() => {
                    this.$refs['x-axis-chart'].destroy()
                }, 500);
            },
            selectedData(){
                let narr = [];
                this.getSortSelectedData.forEach(y => {
                    narr.push({ date: app.moment(y.date).format("MM-DD"), value: parseInt(y.cost), thing: y.thing })
                });
                this.xChartData = narr;
            }
        },
        computed: {
            ...mapState('generic', {
                'categoriesData': (state) => (state.categoriesData),
                'mainDateCategories': (state) => (state.mainDateCategories),
                'navItemsArr': (state) => (state.navItemsArr),
                'dateCategories': (state) => (state.dateCategories),
                'itemsData': (state) => (state.itemsData),
                'budgetData': (state) => (state.budgetData),
                'selectedData': (state) => (state.selectedData)
            }),
            ...mapGetters('generic', [
                'getSortSelectedData'
            ]),
            newKeysData: (val) => {
            let narr = [];
            val.forEach(y => {
                narr.map(x => { 
                   return { date: y.date, value: y.cost, thing: y.thing }
                })
            })
        },
        getIterateDataDate() {
            let repeatData = _.cloneDeep(this.itemsData);
            let newArrDate = [];
            repeatData.forEach(x => {
                let newFormat = [];
                let date = new Date(x.date);
                let month = date.getMonth() + 1;
                let year = date.getFullYear();
                let dateMonthly = `${year}/${month}`
                newFormat = {
                    [dateMonthly]: [x]
                };
                if (!newArrDate.find(z => z[dateMonthly])) {
                    newArrDate.push(newFormat);
                } else {
                    let data = newFormat[dateMonthly]
                    newArrDate.map(z => z[dateMonthly] ? z[dateMonthly].push(...data) : "")
                }
            });
            this.updateDateCategories(newArrDate);
        },
    },
    methods: {
        ...mapActions('generic', [
            "updateCategoriesData",
            "updateMainDateCategories",
            "updateNavItemsArr",
            "updateDateCategories",
            "updateEventData"
        ]),
        toggleClass(evt, step){
            if(evt){ 
                let parent = evt.target.parentElement;
                let children = parent.childNodes;
                children.forEach( (x,i) => {
                    x.classList.remove("active-link");
                });
                children.forEach(x => {
                    if(x.innerHTML == evt.target.innerHTML){
                        x.classList.add("active-link");
                    }
                })
            }
        },
        getMainDateArr(arr) {
            let newArr = [];
            arr.forEach(x => {
                newArr.push({
                    [`${Object.keys(x)[0]}`]: x[`${Object.keys(x)[0]}`]
                });
            });
            return arr;
        },
        transformData(arr) {
            let dataSplit = (val) => val.split('/');
            let arrSort = _.cloneDeep(arr);
            arrSort.sort(function (a, b) {
                let num1 = dataSplit(Object.keys(a)[0])[0] + dataSplit(Object.keys(a)[0])[1];
                let num2 = dataSplit(Object.keys(b)[0])[0] + dataSplit(Object.keys(b)[0])[1];

                if (num1 < num2) return -1;
                if (num2 < num1) return 1;
                return 0;
            });
            return arrSort;
        }
    },
    beforeMount() {
        this.getIterateDataDate;
        this.updateMainDateCategories(this.getMainDateArr(this.dateCategories));
        this.updateMainDateCategories(this.transformData(this.mainDateCategories));
    },
    mounted(){
        this.$refs.reportTabs.iterateYear(this.$refs.reportTabs.getTranslateItemsNav(this.navItemsArr[0], 'step'), this.navItemsArr[0], "", 0)
    }
}
</script>