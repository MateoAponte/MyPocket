<template>
    <div class="container-item__column">
        <div class="m-card">
            <div class="m-card-body">
                <report-comparation-section title="Ingresos :" 
                                        description="(Total de los ingresos)" 
                                        :data="numeral(financeData ? financeData.earnings : '-').format('$0,0')"
                />
                <report-comparation-section title="Gastos" 
                                        description="(Total de los gastos)" 
                                        :data="numeral(financeData ? financeData.expenses : '-').format('$0,0')"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import reportComparationSection from './reportComparationSection';

export default {
    name: "reportComparationLeftCard",
    components: {
        reportComparationSection
    },
    computed: {
        ...mapState('comparation', {
            "financeData": (state) => (state.financeData)
        }),
    }
}
</script>