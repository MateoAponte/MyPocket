<template>
    <div>
        <h1>Hola {{getSaludo}}</h1>
        <button class="m-button m-button-turquese">Guardar</button>
        <p class="m-title">Titulo Regular</p>
        <p class="m-item2">Contenido Común (Quetrial)</p>
        <p class="m-value-light">Contenido Común Ligero (Nunito)</p>
        <p class="m-value-bolder">Contenido Común Bolder (Nunito)</p>
        <p class="m-item">Contenido Común (Khula)</p>
        <div class="m-container">
            <div class="m-card">

            </div>
        </div>
        <div class="m-container">
            <div class="m-card">
                <input type="text" />
            </div>
            <div class="m-card">
                
            </div>
        </div>
        <div class="m-container-anormal">
            <div class="m-card">

            </div>
            <div class="m-card">
                
            </div>
        </div>
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