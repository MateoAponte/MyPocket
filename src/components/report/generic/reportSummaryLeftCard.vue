<template>
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
                <report-summary-section title="Total de Gastos:" 
                                        description="(Total de la cantidad de los gastos)" 
                                        :data="numeral(getTotalExpenses ? getTotalExpenses : '-').format('$0,0')"
                />
                <report-summary-section title="Mes mayor:" 
                                        description="(Mes de mas alto flujo)" 
                                        :data="moment(getHigherMonth ? getHigherCategory : '-').format('ll')"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import reportSummarySection from './reportSummarySection';

export default {
    name: "reportSummaryCard",
    components: {
        reportSummarySection
    },
    props: {
        title: {
            type: String,
            default: "-"
        },
        description: {
            type: String,
            default: "-"
        },
        data: {
            type: String,
            default: "-"
        }
    },
    computed: {
        ...mapState('generic', {
            "mainDateCategories": (state) => (state.mainDateCategories)
        }),
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
        verifyArrLength(arr) {
            if (arr.length > 0) {
                return true;
            }
        },
    }
}
</script>