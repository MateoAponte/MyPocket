<template>
    <div class="m-general-container">
        <div class="m-container">
            <div class="m-container-row">
                <div class="m-container-row">
                    <earning-added />

                    <earning-list />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import EarningAdded from "@Components/Finance/Earnings/EarningAdded"
import EarningList from "@Components/Finance/Earnings/EarningList"

export default {
    name: 'earnings',
    components: {
        EarningAdded,
        EarningList
    }
}
</script>