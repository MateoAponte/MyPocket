<template>
    <div class="m-general-container">
        <div class="m-container savings-container">
            <div class="m-card">
                <div class="m-card-body">
                    <div class="m-container-row">
                        <div class="m-container-column" style="border-right: 1px solid #cccccc;">
                            <img src="@Assets/img/safeMoney.png" alt="" width="100%">
                        </div>
                        <div class="m-container-column">
                            <form-container />
                        </div>
                    </div>
                    <div class="m-container-row">
                        <summary-savings />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import formContainer from '@Components/finance/savings/formContainer';
import summarySavings from '@Components/finance/savings/summarySavings';

export default {
    name: "saving",
    components: {
        formContainer,
        summarySavings
    }
}
</script>

<style lang="scss" scoped>
    .m-container-row{
        .m-container-column:nth-child(1){
            z-index: 1;
        }
    }
</style>