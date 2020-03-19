<template>
    <div class="m-general-container">
        <finance-header />

        <finance-body />
    </div>
</template>

<script>
import FinanceHeader from '@Components/Finance/Expenses/ExpenseHeader';
import FinanceBody from '@Components/Finance/Expenses/ExpenseBody';

export default {
    components: {
        FinanceHeader,
        FinanceBody
    }
}
</script>