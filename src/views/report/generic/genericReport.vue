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
                                    (Últimos 6 meses)
                                </span>
                            </div>
                        </div>
                        <div class="m-card-body">
                            <div class="container-item__row flex-center">
                                <div class="container-item__column">
                                    <pie-chart :data="categoriesData" label="Value"></pie-chart>
                                </div>
                            </div>
                            <div class="container-item__row">
                                <div class="container-item__column">
                                    <div class="m-card">
                                        <div class="m-card-header">
                                            <div class="container-item__row">
                                                <span class="m-title-big">
                                                    Gastos:
                                                </span>
                                            </div>
                                        </div>
                                        <div class="m-card-body">
                                            <div class="container-item__row">
                                                <div class="container-item__column">
                                                    <span class="m-label">
                                                        Total de Gastos:
                                                    </span>
                                                    <span class="m-small">(Total de la cantidad de los gastos)</span>
                                                </div>
                                                <div class="container-item__column">
                                                    <span class="m-label">
                                                        {{numeral(totalExpense).format('$0,0')}}
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="container-item__row">
                                                <div class="container-item__column">
                                                    <span class="m-label">
                                                        Mes mayor:
                                                    </span>
                                                    <span class="m-small">(Mes de mas alto flujo)</span>
                                                </div>
                                                <div class="container-item__column">
                                                    <span class="m-label">
                                                        {{moment(dateExpenseHigher).format('ll')}}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="container-item__column">
                                    <div class="m-card">
                                        <div class="m-card-header">
                                            <div class="container-item__row">
                                                <span class="m-title-big">
                                                    Categorías:
                                                </span>
                                            </div>
                                        </div>
                                        <div class="m-card-body">
                                            <div class="container-item__row">
                                                <div class="container-item__column">
                                                    <span class="m-label">
                                                        Categoría mas común:
                                                    </span>
                                                    <span class="m-small">(Cantidad de veces que se repite)</span>
                                                </div>
                                                <div class="container-item__column">
                                                    <span class="m-label">
                                                        {{expenseHigher}}
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="container-item__row">
                                                <div class="container-item__column">
                                                    <span class="m-label">
                                                        Gasto de categoría:
                                                    </span>
                                                    <span class="m-small">(Promedio por mes)</span>
                                                </div>
                                                <div class="container-item__column">
                                                    <span class="m-label">
                                                        {{numeral('2435447').format('$0,0')}}
                                                    </span>
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
        name: "generic-report",
        data: function () {
            return {
                categoriesData: [],
                totalExpense: 0,
                expenseHigher: "-",
                dateExpenseHigher: "-"
            }
        },
        computed: {
            ...mapGetters('finance', [
                'getItemsData',
                'getBudgetData'
            ]),
            getTraduceData() {
                var result = this.getItemsData.reduce(function (acc, val) {
                    var o = acc.filter(function (obj) {
                        return obj.iconData.category == val.iconData.category;
                    }).pop() || {
                        ...val,
                        cost: 0
                    };

                    o.cost += parseInt(val.cost);
                    acc.push(o);
                    return acc;
                }, []);

                var finalresult = result.filter(function (itm, i, a) {
                    return i == a.indexOf(itm);
                });

                finalresult.map(x => {
                    x.categoryData = this.getItemsData.filter(y => {
                        return x.iconData.category == y.iconData.category;
                    })
                })

                finalresult.forEach( obj => {
                    this.categoriesData.push( { category: obj.iconData.category, cost: obj.cost, date: obj.date } )
                } )
            }
        },
        methods: {
            getTotalExpenses(){
                let arr = _.cloneDeep(this.categoriesData);
                let arrExpense = [];
                arrExpense.push([...arr.map(x => x.cost)]);
                let total = arrExpense.reduce( (acc, agg) => acc + agg );
                this.totalExpense = total.reduce( (acc, agg) => acc + agg );
            },
            getExpense(){
                let arr = _.cloneDeep(this.categoriesData);
                this.expenseHigher = arr.sort()[0].category;
            },
            getDateExpense(){
                let arr = _.cloneDeep(this.categoriesData);
                this.dateExpenseHigher = arr.sort()[0].date;
            },
            getDateExpense(){
                let arr = _.cloneDeep(this.categoriesData);
                this.dateExpenseHigher = arr.sort()[0].date;
            }
        },
        mounted(){
            this.getTraduceData;
            this.getTotalExpenses();
            this.getExpense();
            this.getDateExpense();
        }
    }
</script>