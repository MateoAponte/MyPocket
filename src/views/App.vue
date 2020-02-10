<template>
    <div class='app' @click="toogleHeader">
        <header-generic/>
        <router-view />
        <footer-generic />

        <modal-container />
    </div>
</template>

<script>
import HeaderGeneric from '@Components/Common/header';
import FooterGeneric from '@Components/Common/footer';
import modalContainer from '@Components/Modals/modalContainer';

export default {
    components: {
        HeaderGeneric,
        FooterGeneric,
        modalContainer
    },
    data: function(){
        return {
            toogle: false
        }
    },
    methods: {
        toogleHeader(e) {
            // this.toogle = !this.toogle;
            // let cogIcon = document.querySelector("#cog-icon");
            // let path = document.querySelector("#father-cog-icon").children[0];
            // if(e.target.id !== 'father-cog-icon' && e.target !== path){
            //     cogIcon.style.display = 'none';
            // } else {
            //     this.toogle ? cogIcon.style.display = 'block' : cogIcon.style.display = 'none';
            // }
        }
    }
}
</script>

<style lang="scss">
    @import '@Styles/styles.scss';
</style>