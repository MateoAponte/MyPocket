<template>
    <div class='app'>
        <header-generic/>
        <transition name="slide">
            <calculator v-if="calculator" />
        </transition>
        <router-view />
        <footer-generic />

        <modal-container />
    </div>
</template>

<script>
import HeaderGeneric from '@Components/Common/header';
import FooterGeneric from '@Components/Common/footer';
import modalContainer from '@Components/Modals/modalContainer';
import calculator from '@Components/Common/calculator';
import { mapState } from 'vuex';

export default {
    components: {
        HeaderGeneric,
        FooterGeneric,
        modalContainer,
        calculator
    },
    data: function(){
        return {
            toogle: false
        }
    },
    computed: {
        ...mapState('common', {
            "calculator": (state) => (state.calculator)
        })
    },
}
</script>

<style lang="scss">
    @import '@Styles/styles.scss';
</style>