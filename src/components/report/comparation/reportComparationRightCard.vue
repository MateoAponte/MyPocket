<template>
    <div class="container-item__column">
        <div class="m-card">
            <div class="m-card-body">
                <report-comparation-section title="Total Acum. :" 
                                        description="(Total acumulado de los elementos)" 
                                        :data="financeData ? financeData.quantity : '-' "
                />
                <report-comparation-section title="Cantidad :" 
                                        description="(Total de elementos financieros)" 
                                        :data="numeral(financeData ? financeData.acum : 0).format('$0,0')"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import reportComparationSection from './reportComparationSection';

export default {
    name: "reportComparationRightCard",
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