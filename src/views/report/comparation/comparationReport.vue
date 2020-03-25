<template>
    <div class="m-general-container">
        <div class="m-container generic-report-container">
            <div class="m-container-row">
                <div class="m-container-column">
                    <div class="m-container-tabs">
                        <div class="m-container-tabs__tab" @click="updateToggle(true)" :class="toggle ? 'active-tab' : ''">
                            <font-awesome-icon icon="money-check-alt" />
                            <span class="m-label">
                                Ganancias vs Gastos
                            </span>
                        </div>
                        <div class="m-container-tabs__tab" @click="updateToggle(false)" :class="toggle ? '' : 'active-tab'">
                            <font-awesome-icon icon="piggy-bank" />
                            <span class="m-label">
                                Gastos vs Ahorros
                            </span>
                        </div>
                    </div>
                    <div class="m-card">
                        <div class="m-card-header">
                            <div>
                                <span class="m-title-big">
                                    Reporteria
                                </span>
                                <span class="m-small">
                                    ({{textFeedBack}})
                                </span>
                            </div>
                        </div>
                        <div class="m-card-body">
                            <div class="container-item__row flex-center">
                                <div class="container-item__column">
                                    <negative-axis-chart v-if="toggle" :data="chartData" ref="comparateAxisChart" />                                    
                                    <semi-pie-chart v-else :data="semiPieChart" ref="semiPieChart" />                                    
                                </div>
                            </div>
                            <div class="container-item__row">
                                <div class="container-item__column--medium">
                                    <label class="m-label">
                                        Fecha:
                                    </label>
                                </div>
                                <div class="container-item__column container-item__col-row">
                                    <div class="container-item__column">
                                        <div class="radio-button">
                                            <input id="thisM" name="typeChart" type="radio" value="thisM"
                                                v-model="chartFilter" :disabled="mainDateCategories.length < 0"/>
                                            <label for="thisM" class="radio-label">Mes actual</label>
                                        </div>
                                    </div>
                                    <div class="container-item__column">
                                        <div class="radio-button">
                                            <input id="treeM" name="typeChart" type="radio" value="treeM"
                                                v-model="chartFilter" :disabled="mainDateCategories.length < 2"/>
                                            <label for="treeM" class="radio-label">últimos 3 meses</label>
                                        </div>
                                    </div>
                                    <div class="container-item__column">
                                        <div class="radio-button">
                                            <input id="sixM" name="typeChart" type="radio" value="sixM"
                                                v-model="chartFilter" :disabled="mainDateCategories.length < 5"/>
                                            <label for="sixM" class="radio-label">últimos 6 meses</label>
                                        </div>
                                    </div>
                                    <div class="container-item__column">
                                        <div class="radio-button">
                                            <input id="allM" name="typeChart" type="radio" value="allM"
                                                v-model="chartFilter" :disabled="mainDateCategories.length < 6"/>
                                            <label for="allM" class="radio-label">Todo el año</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="container-item__row">
                                <span class="m-title-big">
                                    Resumen por selección:
                                </span>
                            </div>
                            <div class="container-item__row" v-if="toggle">
                                <report-comparation-left-card />

                                <report-comparation-right-card />
                            </div>
                            <div class="container-item__row" v-else>
                                <report-savings-left-card style="width: 50%"/>

                                <!-- <report-savings-right-card /> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import reportComparationLeftCard from '@Components/report/comparation/reportComparationLeftCard';
    import reportComparationRightCard from '@Components/report/comparation/reportComparationRightCard';
    import reportSavingsRightCard from '@Components/report/comparation/reportSavingsRightCard';
    import reportSavingsLeftCard from '@Components/report/comparation/reportSavingsLeftCard';

    import {
        mapGetters,
        mapActions,
        mapState
    } from 'vuex';
    export default {
        name: "comparation-report",
        components: {
            reportComparationLeftCard,
            reportComparationRightCard,
            reportSavingsRightCard,
            reportSavingsLeftCard,
        },
        data: function () {
            return {
                chartData: [],
                semiPieChart: [],
                chartFilter: 'thisM',
                expenses: 0,
                earnings: 0,
                acum: 0,
                quantity: 0,
                toggle: true
            }
        },
        watch: {
            chartFilter(newVal) {
                this.chartData = [];
                switch (this.chartFilter) {
                    case 'thisM':
                        this.chartData = this.spliceArray(this.mainDateCategories, 0, 1);
                        break;
                    case 'treeM':
                        this.chartData = this.spliceArray(this.mainDateCategories, 0, 3);
                        break;
                    case 'sixM':
                        this.chartData = this.spliceArray(this.mainDateCategories, 0, 6);
                        break;
                    case 'allM':
                        this.chartData = this.spliceArray(this.mainDateCategories, 0, 12);
                        break;
                }
                this.chartData = this.getSortSelectedData(this.convertData(this.chartData));
                this.getFinanceData;
                setTimeout(() => {
                    this.toggle ? this.$refs["comparateAxisChart"].destroy() : this.$refs["semiPieChart"].destroy();
                }, 500)
            },
            financeData(newVal) {
                this.semiPieChart = [];
                this.semiPieChart.push(...[
                    {
                        type: 'Gastos',
                        value: (newVal.expenses * 100) / newVal.earnings
                    },
                    {
                        type: 'Ahorros',
                        value: (newVal.savings * 100) / newVal.earnings
                    }
                ])
                newVal
            }
        },
        computed: {
            ...mapState('comparation', {
                'xyChartData': (state) => (state.xyChartData),
                'dateCategories': (state) => (state.dateCategories),
                'mainDateCategories': (state) => (state.mainDateCategories),
                'financeData': (state) => (state.financeData),
            }),
            textFeedBack() {
                switch (this.chartFilter) {
                    case 'thisM':
                        return 'Este Mes';
                        break;
                    case 'treeM':
                        return 'Últimos 3 meses';
                        break;
                    case 'sixM':
                        return 'Últimos 6 meses';
                        break;
                    case 'allM':
                        return 'Todo el año'
                        break;
                }
            },
            getFinanceData() {
                this.updateFinanceData({
                    earnings: 0,
                    expenses: 0,
                    quantity: 0,
                    savings: 0,
                    acum: 0
                });
                let expenses = 0, earnings = 0, acum = 0, quantity = 0, savings = 0;
                this.chartData.forEach(x => {
                    if (x.iconData.type === 'earning') {
                        earnings += parseInt(x.cost)
                    } else if (x.iconData.type === 'expense') {
                        expenses += parseInt(x.cost * -1)
                    } else {
                        savings += parseInt(x.cost * -1)
                    }
                    acum += parseInt(x.cost);
                    quantity = this.chartData.length;
                })
                this.updateFinanceData({
                    earnings: earnings,
                    expenses: expenses,
                    acum: acum,
                    savings: savings,
                    quantity: quantity
                });
            },
            getIterateDataDate() {
                let repeatData = _.cloneDeep(this.xyChartData);
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
            setPieChart(){

            }
        },
        methods: {
            ...mapActions('comparation', [
                'updateMainDateCategories',
                'updateDateCategories',
                'updateFinanceData'
            ]),
            updateToggle(val){
                this.toggle = val;
            },
            spliceArray(arr, init, limit) {
                let cloneArr = _.cloneDeep(arr);
                let newArr = [];
                if (cloneArr[limit]) {
                    cloneArr = cloneArr.splice(init, limit);
                } else {
                    cloneArr = cloneArr.splice(init, cloneArr.length - 1);
                }
                cloneArr.forEach(x => {
                    newArr.push(...x[`${Object.keys(x)[0]}`]);
                });
                return newArr;
            },
            getSortSelectedData(arr) {
                let newArr = _.cloneDeep(arr);
                let sortArray = newArr.sort((a, b) => {
                    return new Date(b.date) - new Date(a.date);
                });
                return sortArray;
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
            convertData(arr) {
                let data = _.cloneDeep(arr);
                data.forEach(x => {
                    if (x.iconData.type === 'expense') {
                        x.cost = x.cost * -1;
                    } else {
                        x.cost = x.cost;
                    }
                });
                return data;
            },
            transformData(arr) {
                let dataSplit = (val) => val.split('/');
                let arrSort = _.cloneDeep(arr);
                arrSort.sort(function (a, b) {
                    let num1 = parseInt(dataSplit(Object.keys(a)[0])[0]) + parseInt(dataSplit(Object.keys(a)[
                        0])[1]);
                    let num2 = parseInt(dataSplit(Object.keys(b)[0])[0]) + parseInt(dataSplit(Object.keys(b)[
                        0])[1]);
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
        mounted() {
            this.chartData = this.spliceArray(this.mainDateCategories, 0, 1);
            this.chartData = this.getSortSelectedData(this.convertData(this.chartData));

            setTimeout(() => {
                this.toggle ? this.$refs["comparateAxisChart"].destroy() : this.$refs["semiPieChart"].destroy();
                this.getFinanceData;
            }, 500)
        },
    }
</script>