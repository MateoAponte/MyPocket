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
    data: function(){
        return{
            expenses: 0,
            earnings: 0,
            percent: 0
        }
    },
    computed: {
        ...mapState('common', {
            'itemsData': (state) => (state.itemsData),
            'budgetData': (state) => (state.personalData.budgetData),
            'earningData': (state) => (state.earningData)
        }),
        setExpenses(){
            this.expenses = 0;
            this.itemsData.forEach( x => {
                this.expenses += parseInt(x.cost);
            } );
            return this.expenses;
        },
        setBudget(){
            this.earnings = 0;
            this.earningData.forEach( x => {
                this.earnings += parseInt(x.cost);
            } );
            return this.earnings;
        },
        setPercentil(){
            this.percent = 0;
            this.earningData.forEach( x => {
                this.percent += parseFloat(x.cost * (x.percent / 100));
            } );
            return this.percent;
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