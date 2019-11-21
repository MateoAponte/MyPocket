<template>
    <div>
        <h1>Hola {{getSaludo}}</h1>
        <button class="m-button m-button-turquese">Guardar</button>
    </div>
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