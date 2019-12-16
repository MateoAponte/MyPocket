<template>
    <div class="m-card">
        <div class="m-card-header">
            <div class="m-container-item--row">
                <label class="m-title">
                    Información
                </label>
            </div>
        </div>
        <div class="m-card-body space-around">
            <div class="m-container-item--row minify-padding">
                <div class="m-container-item--column--medium simple-column simple-column-left">
                    <label class="m-title">
                        Items:
                    </label>
                </div>
                <div class="m-container-item--column column-underline"></div>
                <div class="m-container-item--column--medium simple-column simple-column-right">
                    <label class="m-title">
                        {{numeral(setQuantityItems).format('0')}}
                    </label>
                </div>
            </div>
            <div class="m-container-item--row minify-padding">
                <div class="m-container-item--column--medium simple-column simple-column-left">
                    <label class="m-title">
                        Presupuesto:
                    </label>
                </div>
                <div class="m-container-item--column column-underline"></div>
                <div class="m-container-item--column--medium simple-column simple-column-right">
                    <label class="m-title">
                        {{numeral(setBudget).format('$0,0')}}
                    </label>
                </div>
            </div>
            <div class="m-container-item--row minify-padding">
                <div class="m-container-item--column--medium simple-column simple-column-left">
                    <label class="m-title">
                        Descuento:
                    </label>
                </div>
                <div class="m-container-item--column column-underline"></div>
                <div class="m-container-item--column--medium simple-column simple-column-right">
                    <label class="m-title">
                        {{numeral(setPercentil).format('$0,0')}}
                    </label>
                </div>
            </div>
            <div class="m-container-item--row minify-padding">
                <div class="m-container-item--column--medium simple-column simple-column-left">
                    <label class="m-title">
                        Gastos:
                    </label>
                </div>
                <div class="m-container-item--column column-underline"></div>
                <div class="m-container-item--column--medium simple-column simple-column-right">
                    <label class="m-title">
                        {{numeral(setExpenses).format('$0,0')}}
                    </label>
                </div>
            </div>
            <div class="m-container-item--row minify-padding">
                <div class="m-container-item--column--medium simple-column simple-column-left">
                    <label class="m-title">
                        Sobrante:
                    </label>
                </div>
                <div class="m-container-item--column column-underline"></div>
                <div class="m-container-item--column--medium simple-column simple-column-right">
                    <label class="m-title">
                        {{numeral(setRes).format('$0,0')}}
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'FinanceInfo',
    computed: {
        ...mapGetters('finance', [
            'getItemsData',
            'getBudgetData'
        ]),
        setExpenses(){
            this.getBudgetData.expenses = 0;
            this.getItemsData.forEach( x => {
                this.getBudgetData.expenses += parseInt(x.cost);
            } );
            return this.getBudgetData.expenses;
        },
        setBudget(){
            return this.getBudgetData.budget;
        },
        setPercentil(){
            return this.getBudgetData.budget * (this.getBudgetData.percentil / 100);
        },
        setRes(){
            return this.setBudget - this.setExpenses;
        },
        setQuantityItems(){
            return this.getItemsData.length - 1;
        }
    }
}
</script>