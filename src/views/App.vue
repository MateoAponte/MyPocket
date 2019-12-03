<template>
    <div class='app' @click="toogleHeader">
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
    },
    data: function(){
        return {
            toogle: false
        }
    },
    methods: {
        toogleHeader(e) {
            this.toogle = !this.toogle;
            let cogIcon = document.querySelector("#cog-icon");
            let path = document.querySelector("#father-cog-icon").children[0];
            if(e.target.id !== 'father-cog-icon' && e.target !== path){
                cogIcon.style.display = 'none';
            } else {
                this.toogle ? cogIcon.style.display = 'block' : cogIcon.style.display = 'none';
            }
        }
    }
}
</script>

<style lang="scss">
    @import '@Styles/styles.scss';
</style>