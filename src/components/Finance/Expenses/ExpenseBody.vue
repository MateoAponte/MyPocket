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
import FinanceList from './ExpenseList';
import FinanceInfo from './ExpenseInfo';

export default {
    name: 'FinanceBody',
    components: {
        FinanceList,
        FinanceInfo
    }
}
</script>