<template>
    <div class="m-container-column">
        <span class="m-title-big">Ahorros</span>
        <div class="m-container-row">
            <div class="m-card minify-padding">
                <div class="m-card-body">
                    <div class="m-container-row minify-padding">
                        <div class="m-container-column" v-for="(item, index) in savingData" :key="index">
                            <saving-card :data="item" :index="index" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import savingCard from './savingCard';
import { mapState } from 'vuex';

export default {
    name: "summarySavings",
    components: {
        savingCard
    },
    computed: {
        ...mapState('common', {
            "savingData": (state) => (state.savingData)
        })
    }
}
</script>