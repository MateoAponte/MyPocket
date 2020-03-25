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
                                    ({{textFeedBack}})
                                </span>
                            </div>
                        </div>
                        <div class="m-card-body">
                            <div class="container-item__row flex-center">
                                <div class="container-item__column">
                                    <negative-axis-chart :data="chartData" ref="comparateAxisChart" />                                    
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
                                                v-model="chartFilter" />
                                            <label for="thisM" class="radio-label">Mes actual</label>
                                        </div>
                                    </div>
                                    <div class="container-item__column">
                                        <div class="radio-button">
                                            <input id="treeM" name="typeChart" type="radio" value="treeM"
                                                v-model="chartFilter" />
                                            <label for="treeM" class="radio-label">últimos 3 meses</label>
                                        </div>
                                    </div>
                                    <div class="container-item__column">
                                        <div class="radio-button">
                                            <input id="sixM" name="typeChart" type="radio" value="sixM"
                                                v-model="chartFilter" />
                                            <label for="sixM" class="radio-label">últimos 6 meses</label>
                                        </div>
                                    </div>
                                    <div class="container-item__column">
                                        <div class="radio-button">
                                            <input id="allM" name="typeChart" type="radio" value="allM"
                                                v-model="chartFilter" />
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
                            <div class="container-item__row">
                                <report-comparation-left-card />

                                <report-comparation-right-card />
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
        },
        data: function () {
            return {
                chartData: [],
                chartFilter: 'thisM',
                expenses: 0,
                earnings: 0,
                acum: 0,
                quantity: 0
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
                    this.$refs["comparateAxisChart"].destroy();
                }, 500)
            }
        },
        computed: {
            ...mapState('comparation', {
                'xyChartData': (state) => (state.xyChartData),
                'dateCategories': (state) => (state.dateCategories),
                'mainDateCategories': (state) => (state.mainDateCategories)
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
                    acum: 0
                });
                let expenses = 0, earnings = 0, acum = 0, quantity = 0;
                this.chartData.forEach(x => {
                    if (x.iconData.type === 'earning') {
                        earnings += parseInt(x.cost)
                    } else {
                        expenses += parseInt(x.cost * -1)
                    }
                    acum += parseInt(x.cost);
                    quantity = this.chartData.length;
                })
                this.updateFinanceData({
                    earnings: earnings,
                    expenses: expenses,
                    acum: acum,
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
        },
        methods: {
            ...mapActions('comparation', [
                'updateMainDateCategories',
                'updateDateCategories',
                'updateFinanceData'
            ]),
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
                this.$refs["comparateAxisChart"].destroy();
                this.getFinanceData;
            }, 500)
        },
    }
</script>