<template>
    <div class="m-card">
        <div class="m-card-header">
            <div class="container-item__row">
                <label class="m-title">
                    Información
                </label>
            </div>
        </div>
        <div class="m-card-body space-around column">
            <div class="container-item__row minify-padding">
                <div class="container-item__column--medium simple-column simple-column-left">
                    <label class="m-label">
                        Items:
                    </label>
                </div>
                <div class="container-item__column column-underline"></div>
                <div class="container-item__column--medium simple-column simple-column-right">
                    <label class="m-label">
                        {{numeral(setQuantityItems).format('0')}}
                    </label>
                </div>
            </div>
            <div class="container-item__row minify-padding">
                <div class="container-item__column--medium simple-column simple-column-left">
                    <label class="m-label">
                        Presupuesto:
                    </label>
                </div>
                <div class="container-item__column column-underline"></div>
                <div class="container-item__column--medium simple-column simple-column-right">
                    <label class="m-label">
                        {{numeral(setBudget).format('$0,0')}}
                    </label>
                </div>
            </div>
            <div class="container-item__row minify-padding">
                <div class="container-item__column--medium simple-column simple-column-left">
                    <label class="m-label">
                        Descuento:
                    </label>
                </div>
                <div class="container-item__column column-underline"></div>
                <div class="container-item__column--medium simple-column simple-column-right">
                    <label class="m-label">
                        {{numeral(setPercentil).format('$0,0')}}
                    </label>
                </div>
            </div>
            <div class="container-item__row minify-padding">
                <div class="container-item__column--medium simple-column simple-column-left">
                    <label class="m-label">
                        Gastos:
                    </label>
                </div>
                <div class="container-item__column column-underline"></div>
                <div class="container-item__column--medium simple-column simple-column-right">
                    <label class="m-label" :style="{ color: setExpenses > budgetData.budget ? '#FB7185' : '#545454'}">
                        {{numeral(setExpenses).format('$0,0')}}
                    </label>
                </div>
            </div>
            <div class="container-item__row minify-padding">
                <div class="container-item__column--medium simple-column simple-column-left">
                    <label class="m-label">
                        Sobrante:
                    </label>
                </div>
                <div class="container-item__column column-underline"></div>
                <div class="container-item__column--medium simple-column simple-column-right">
                    <label class="m-label" :style="{ color: setRes < 0 ? '#FB7185' : '#545454' }">
                        {{numeral(setRes).format('$0,0')}}
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'FinanceInfo',
    computed: {
        ...mapState('common', {
            'itemsData': (state) => (state.itemsData),
            'budgetData': (state) => (state.personalData.budgetData)
        }),
        setExpenses(){
            this.budgetData.expenses = 0;
            this.itemsData.forEach( x => {
                this.budgetData.expenses += parseInt(x.cost);
            } );
            return this.budgetData.expenses;
        },
        setBudget(){
            return this.budgetData.budget;
        },
        setPercentil(){
            return this.budgetData.budget * (this.budgetData.percentil / 100);
        },
        setRes(){
            return this.setBudget - this.setExpenses;
        },
        setQuantityItems(){
            return this.itemsData.length - 1;
        }
    }
}
</script>