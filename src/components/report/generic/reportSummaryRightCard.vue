<template>
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
                <report-summary-section title="Categoría mas común:" 
                                        description="(Cantidad de veces que se repite)" 
                                        :data="numeral(getHigherCategory ? getHigherCategory.price : 0).format('$0,0')"
                />
                <report-summary-section title="Gasto de categoría:" 
                                        description="(Promedio por mes)" 
                                        :data="numeral(getExpenseCategory ? getExpenseCategory : 0).format('$0,0')"
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