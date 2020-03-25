<template>
    <div>
        <h1>Summary Savings</h1>
        <saving-card />
    </div>
</template>

<script>
import savingCard from './savingCard';

export default {
    name: "summarySavings",
    components: {
        savingCard
    }
}
</script>