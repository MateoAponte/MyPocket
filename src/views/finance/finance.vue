<template>
    <div class="m-general-container">
        <finance-header />

        <finance-body />
    </div>
</template>

<script>
import FinanceHeader from '@Components/Finance/FinanceHeader';
import FinanceBody from '@Components/Finance/FinanceBody';

export default {
    components: {
        FinanceHeader,
        FinanceBody
    }
}
</script>