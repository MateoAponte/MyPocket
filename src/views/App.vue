<template>
    <div class='app'>
        <header-generic/>
        <router-view />
        <footer-generic />
    </div>
</template>

<script>
import HeaderGeneric from '@Views/common/header'
import FooterGeneric from '@Views/common/footer'
export default {
    components: {
        HeaderGeneric,
        FooterGeneric
    }
}
</script>

<style lang="scss">
    @import '@Styles/styles.scss';
</style>