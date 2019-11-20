<template>
    <h1>Hola {{getSaludo}}</h1>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data: function(){
        return {
            
        }
    },
    computed: {
        ...mapGetters('common', [
            'getSaludo'
        ])
    }
}
</script>