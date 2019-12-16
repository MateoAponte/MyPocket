<template>
    <div class="m-container">
        <div class="m-container-row">
            <div class="m-container-row m-container-anormal">
                <div class="m-container-column">
                    <finance-list />
                </div>
                <div class="m-container-column">
                    <finance-info />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FinanceList from '@Components/Finance/FinanceList';
import FinanceInfo from '@Components/Finance/FinanceInfo';

export default {
    name: 'FinanceBody',
    components: {
        FinanceList,
        FinanceInfo
    }
}
</script>