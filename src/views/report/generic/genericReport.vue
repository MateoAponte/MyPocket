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
                            <div class="container-item__row">
                                <div class="container-item__column" v-for="(itemNav, index) in navItemsArr" :key="index"
                                    @click="iterateYear(getTranslateItemsNav(itemNav, 'step'), itemNav, $event, index)"
                                    :childNode="index"
                                >
                                    {{getTranslateItemsNav(itemNav, "date")}}
                                </div>
                            </div>
                        </div>
                        <div class="m-card-body">
                            <div class="container-item__row flex-center">
                                <div class="container-item__column">
                                    <pie-chart :data="categoriesData" label="Value" ref="pie-chart" type="watcher"></pie-chart>
                                </div>
                            </div>
                            <div class="container-item__row">
                                <span class="m-title-big">
                                    Resumen Anual:
                                </span>
                            </div>
                            <div class="container-item__row">
                                <div class="container-item__column">
                                    <div class="m-card">
                                        <div class="m-card-header">
                                            <div class="container-item__row">
                                                <span class="m-title-big">
                                                    Resumen:
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
                                                        {{numeral(getTotalExpenses ? getTotalExpenses : "-").format('$0,0')}}
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
                                                        {{moment(getHigherMonth ? getHigherCategory : "-").format('ll')}}
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
                                                    Promedio:
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
                                                        {{getHigherCategory ? getHigherCategory.category : "-"}}
                                                        <span class="m-small">
                                                            ({{numeral(getHigherCategory ? getHigherCategory.price : 0).format('$0,0')}})
                                                        </span>
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
                                                        {{numeral(getExpenseCategory ? getExpenseCategory : 0).format('$0,0')}}
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
    import {
        mapGetters
    } from 'vuex';
import { keys } from '@amcharts/amcharts4/.internal/core/utils/Object';
    export default {
        name: "generic-report",
        data: function () {
            return {
                categoriesData: [],
                dateCategories: [],
                mainDateCategories: [],
                navItemsArr: [],
                elementTarget: {}
            }
        },
        watch: {
            categoriesData(){
                this.$refs['pie-chart'].destroy()
            }
        },
        computed: {
            ...mapGetters('finance', [
                'getItemsData',
                'getBudgetData'
            ]),
            getIterateDataDate() {
                let repeatData = [];
                repeatData.push({
                        "thing": "Universidad",
                        "cost": "500000",
                        "priority": "Alta",
                        "date": "2020/02/25",
                        "iconData": {
                            "category": 'Tecnología',
                            "name": 'mobile-alt',
                            "class": '#BE4BDB'
                        }
                    }, {
                        "thing": "Celular",
                        "cost": "250000",
                        "priority": "Alta",
                        "date": "2020/02/25",
                        "iconData": {
                            "category": 'Banco & Transacciones',
                            "name": 'money-bill-wave',
                            "class": '#12BB85'
                        }
                    }, {
                        "thing": "Bicicleta",
                        "cost": "167000",
                        "priority": "Alta",
                        "date": "2020/02/25",
                        "iconData": {
                            "category": 'Banco & Transacciones',
                            "name": 'money-bill-wave',
                            "class": '#12BB85'
                        }
                    }, {
                        "thing": "Comida",
                        "cost": "100000",
                        "priority": "Media",
                        "date": "2020/02/26",
                        "iconData": {
                            "category": 'Comida',
                            "name": 'utensils',
                            "class": '#FD7E14'
                        }
                    }, {
                        "thing": "Transporte",
                        "cost": "80000",
                        "priority": "Media",
                        "date": "2020/02/26",
                        "iconData": {
                            "category": 'Viajes',
                            "name": 'plane',
                            "class": '#F963A0'
                        }
                    }, {
                        "thing": "Canastas",
                        "cost": "300000",
                        "priority": "Alta",
                        "date": "2020/02/26",
                        "iconData": {
                            "category": 'Comida',
                            "name": 'utensils',
                            "class": '#FD7E14'
                        }
                    }, {
                        "thing": "Instituto",
                        "cost": "150000",
                        "priority": "Alta",
                        "date": "2020/02/26",
                        "iconData": {
                            "category": 'Banco & Transacciones',
                            "name": 'money-bill-wave',
                            "class": '#12BB85'
                        }
                    }, {
                    "thing": "Otros",
                    "cost": "50000",
                    "priority": "Baja",
                    "date": "2020/02/27",
                    "iconData": {
                        "category": 'Comida',
                        "name": 'utensils',
                        "class": '#FD7E14'
                    }
                }, {
                    "thing": "Audifonos (Balaca)",
                    "cost": "80000",
                    "priority": "Media",
                    "date": "2020/02/27",
                    "iconData": {
                        "category": 'Tecnología',
                        "name": 'mobile-alt',
                        "class": '#BE4BDB'
                    }
                }, {
                    "thing": "Audifonos (Balaca)",
                    "cost": "80000",
                    "priority": "Media",
                    "date": "2020/02/27",
                    "iconData": {
                        "category": 'Moda',
                        "name": 'tshirt',
                        "class": '#4C6EF5'
                    }
                }, {
                    "thing": "Universidad",
                    "cost": "500000",
                    "priority": "Alta",
                    "date": "2020/03/25",
                    "iconData": {
                        "category": "Tecnología",
                        "name": "mobile-alt",
                        "class": "#BE4BDB"
                    }
                }, {
                    "thing": "Universidad",
                    "cost": "500000",
                    "priority": "Alta",
                    "date": "2020/03/25",
                    "iconData": {
                        "category": "Juegos",
                        "name": "mobile-alt",
                        "class": "#BE4BDB"
                    }
                }, {
                    "thing": "Universidad",
                    "cost": "500000",
                    "priority": "Alta",
                    "date": "2020/03/25",
                    "iconData": {
                        "category": "Moda",
                        "name": "mobile-alt",
                        "class": "#BE4BDB"
                    }
                }, {
                    "thing": "Universidad",
                    "cost": "500000",
                    "priority": "Alta",
                    "date": "2020/03/25",
                    "iconData": {
                        "category": "Tecnología",
                        "name": "mobile-alt",
                        "class": "#BE4BDB"
                    }
                }, {
                    "thing": "Universidad",
                    "cost": "500000",
                    "priority": "Alta",
                    "date": "2020/04/25",
                    "iconData": {
                        "category": "Tecnología",
                        "name": "mobile-alt",
                        "class": "#BE4BDB"
                    }
                }, {
                    "thing": "Universidad",
                    "cost": "500000",
                    "priority": "Alta",
                    "date": "2020/04/25",
                    "iconData": {
                        "category": "Moda",
                        "name": "mobile-alt",
                        "class": "#BE4BDB"
                    }
                }, {
                    "thing": "Universidad",
                    "cost": "500000",
                    "priority": "Alta",
                    "date": "2020/04/25",
                    "iconData": {
                        "category": "Juegos",
                        "name": "mobile-alt",
                        "class": "#BE4BDB"
                    }
                }, {
                    "thing": "Universidad",
                    "cost": "500000",
                    "priority": "Alta",
                    "date": "2020/04/25",
                    "iconData": {
                        "category": "Tecnología",
                        "name": "mobile-alt",
                        "class": "#BE4BDB"
                    }
                }, {
                    "thing": "Universidad",
                    "cost": "500000",
                    "priority": "Alta",
                    "date": "2020/04/25",
                    "iconData": {
                        "category": "Moda",
                        "name": "mobile-alt",
                        "class": "#BE4BDB"
                    }
                }, {
                    "thing": "Universidad",
                    "cost": "500000",
                    "priority": "Alta",
                    "date": "2020/04/25",
                    "iconData": {
                        "category": "Juegos",
                        "name": "mobile-alt",
                        "class": "#BE4BDB"
                    }
                }, {
                    "thing": "Universidad",
                    "cost": "500000",
                    "priority": "Alta",
                    "date": "2020/04/25",
                    "iconData": {
                        "category": "Tecnología",
                        "name": "mobile-alt",
                        "class": "#BE4BDB"
                    }
                }, {
                    "thing": "Universidad",
                    "cost": "500000",
                    "priority": "Alta",
                    "date": "2020/04/25",
                    "iconData": {
                        "category": "Moda",
                        "name": "mobile-alt",
                        "class": "#BE4BDB"
                    }
                },
            )
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
            this.dateCategories = newArrDate;
        },
        getHigherCategory() {
            let arr = _.cloneDeep(this.mainDateCategories);
            let subArr = [];
            let counter = {};
            arr.forEach(x => {
                subArr = x[Object.keys(x)[0]]
                subArr.forEach(function (z) {
                    counter[z.iconData.category] = (counter[z.iconData.category] || 0) + 1;
                });
            });
            if (this.verifyArrLength(Object.keys(counter))) {
                let category = Object.keys(counter).reduce(function (a, b) {
                    return counter[a] > counter[b] ? a : b;
                });
                arr.forEach(x => {
                    subArr = x[Object.keys(x)[0]];
                    subArr.forEach(function (z) {
                        counter[z.iconData.category] = (counter[z.iconData.category] || 0) + parseInt(z
                            .cost);
                    });
                });
                if (this.verifyArrLength(Object.values(counter))) {
                    let price = Object.values(counter).sort(function (a, b) {
                        if (a < b) return -1;
                        if (b < a) return 1;
                        return 0;
                    });
                    return {
                        category: category,
                        price: price.reverse()[0]
                    }
                }
            }
        },
        getExpenseCategory() {
            let arr = _.cloneDeep(this.mainDateCategories);
            let subArr = [];
            let counter = {};
            arr.forEach(x => {
                subArr = x[Object.keys(x)[0]]
                subArr.forEach(function (z) {
                    counter[z.iconData.category] = (counter[z.iconData.category] || 0) + parseInt(z
                        .cost);
                });
            });
            if (this.verifyArrLength(Object.values(counter))) {
                let cost = Object.values(counter).reduce((a, b) => {
                    return parseInt(a) + parseInt(b)
                });
                return (cost / arr.length);
            }
        },
        getTotalExpenses() {
            let arr = _.cloneDeep(this.mainDateCategories);
            let subArr = [];
            let counter = {};
            arr.forEach(x => {
                subArr = x[Object.keys(x)[0]];
                subArr.forEach(function (z) {
                    counter[z.iconData.category] = (counter[z.iconData.category] || 0) + parseInt(z
                        .cost);
                });
            });
            if (this.verifyArrLength(Object.values(counter))) {
                return Object.values(counter).reduce((a, b) => {
                    return parseInt(a) + parseInt(b)
                });
            }
        },
        getHigherMonth() {
            let arr = _.cloneDeep(this.mainDateCategories);
            let subArr = [];
            let counter = {};

            arr.forEach(x => {
                subArr = x[Object.keys(x)[0]]
                subArr.forEach(function (z, i) {
                    if (i == 0) {
                        counter[Object.keys(x)[0]] = 0;
                    }
                    counter[Object.keys(x)[0]] += parseInt(z.cost);
                });
            });
            if (this.verifyArrLength(Object.values(counter))) {
                let price = Object.values(counter).sort(function (a, b) {
                    if (a < b) return -1;
                    if (b < a) return 1;
                    return 0;
                })[0];
                let date = Object.keys(counter).filter(function (a) {
                    return counter[a] == price;
                });
                return date[0];
            }
        }
    },
    methods: {
        firtsItemTab(){
            let tabs = document.querySelectorAll(".generic-report-container > .m-container-row .m-card .m-card-header .container-item__row  .container-item__column");
            tabs[0].classList.add("active-link");
        },
        getTranslateItemsNav(fragmentDate, type) {
            let keys = Object.keys(fragmentDate)[0];
            let date = this.moment(keys).format('ll');
            let split = keys.split("/");
            return type == "date" ? date.replace(/(\s[0-9]\,)+/, "") : split[1];
        },
        getTraduceData(index, item) {
            this.categoriesData = [];
            let arr = [];
            
            if(!item){
                arr = _.cloneDeep(this.navItemsArr).filter(x => {
                    let key = [];
                    key = Object.keys(x)[0].split("/");
                    return Object.keys(x)[0] === `${key[0]}/${new Date().getMonth()}`;
                });
                arr = arr[0][`${new Date().getFullYear()}/${new Date().getMonth()}`];
            } else {
                arr = _.cloneDeep(this.navItemsArr).filter(x => {
                    let key = [];
                    key = Object.keys(x)[0].split("/");
                    return Object.keys(x)[0] === `${key[0]}/${index}`;
                });
                arr = arr[0][Object.keys(item)[0]];
            }

            var result = arr.reduce(function (acc, val) {
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
                x.categoryData = arr.filter(y => {
                    return x.iconData.category == y.iconData.category;
                })
            })
            finalresult.forEach(obj => {
                this.categoriesData.push({
                    category: obj.iconData.category,
                    cost: obj.cost,
                    date: obj.date
                })
            });
        },
        toggleClass(evt, step){
            let parent = evt.target.parentElement;
            let children = parent.childNodes;
            children.forEach( (x,i) => {
                x.classList.remove("active-link");
            });
            children[step].classList.add("active-link");
            this.elementTarget = evt.target;
        },
        iterateYear(index, arr, evt, step) {
            if(evt){
                this.toggleClass(evt, step);
            }
            this.getYear(index);
            this.getTraduceData(index, arr);
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
        verifyArrDate(arr, date) {
            if (!arr.find(x => Object.keys(x)[0] == date)) {
                return arr
            }
        },
        verifyArrLength(arr) {
            if (arr.length > 0) {
                return true;
            }
        },
        getNavItemsArr(mainArr, year, month) {
            let hollowArr = [];
            mainArr.forEach(x => {
                if (x[`${year}/${month - 1}`]) {
                    this.verifyArrDate(hollowArr, `${year}/${month - 1}`).push({
                        [`${year}/${month - 1}`]: x[`${year}/${month - 1}`]
                    });
                } else if (x[`${year}/${month}`]) {
                    this.verifyArrDate(hollowArr, `${year}/${month}`).push({
                        [`${year}/${month}`]: x[`${year}/${month}`]
                    });
                } else if (x[`${year}/${month + 1}`]) {
                    this.verifyArrDate(hollowArr, `${year}/${month + 1}`).push({
                        [`${year}/${month + 1}`]: x[`${year}/${month + 1}`]
                    });
                }
            });
            return hollowArr;
        },
        transformData(arr) {
            let dataSplit = (val) => val.split('/');
            arr.sort(function (a, b) {
                let num1 = dataSplit(Object.keys(a)[0])[0] + dataSplit(Object.keys(a)[0])[1];
                let num2 = dataSplit(Object.keys(b)[0])[0] + dataSplit(Object.keys(b)[0])[1];

                if (num1 < num2) return -1;
                if (num2 < num1) return 1;
                return 0;
            });
            return arr;
        },
        getYear(i) {
            let year = new Date().getFullYear();
            let keysDate = [];
            this.mainDateCategories.forEach(x => {
                keysDate.push(...Object.keys(x))
            });
            
            let date = keysDate.filter(x => x == `${year}/${i}`);
            date = date.join('').split('/');
            this.navItemsArr = this.getNavItemsArr(this.mainDateCategories, parseInt(date[0]), parseInt(date[1]));
            this.navItemsArr = this.transformData(this.navItemsArr);
        }
    },
    beforeMount() {
        let date = new Date();
        let month = date.getMonth();
        let year = date.getFullYear();

        this.getIterateDataDate;
        this.mainDateCategories = this.getMainDateArr(this.dateCategories);
        this.mainDateCategories = this.transformData(this.mainDateCategories);
        this.iterateYear(month);
    },
    mounted(){
        this.firtsItemTab();
    }
}
</script>