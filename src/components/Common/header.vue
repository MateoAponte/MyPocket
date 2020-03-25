<template>
    <header class="header-container">
        <div class="header-container-column">
            <router-link to="/" class="m-link-container">
                <span class="m-link">
                    Provisional
                </span>
            </router-link>
        </div>
        <div class="header-container-column">
            <div class="header-container-column-section">
                <div class="m-link-container" active-class="m-link-active" >
                    <span class="m-link">
                        Finanzas
                        <div class="m-link-dropdown">
                            <div class="m-link-item">
                               <router-link to="/finance/expenses"> Gastos </router-link>
                            </div>
                            <div class="m-link-item">
                                <router-link to="/finance/earnings"> Ingresos </router-link>
                            </div>
                            <div class="m-link-item">
                                <router-link to="/finance/savings"> Ahorros </router-link>
                            </div>
                        </div>
                    </span>
                </div>
                <router-link to="/summary" class="m-link-container" active-class="m-link-active" >
                    <span class="m-link">
                        Resumen
                    </span>
                </router-link>
                <router-link to="/icons" class="m-link-container" active-class="m-link-active" >
                    <span class="m-link">
                        Iconos
                    </span>
                </router-link>
                <router-link to="/configuration" class="m-link-container" active-class="m-link-active" >
                    <span class="m-link">
                        Configuración
                    </span>
                </router-link>
                <div class="m-link-container" >
                    <span class="m-link">
                        Reporte
                        <div class="m-link-dropdown">
                            <div class="m-link-item">
                                <router-link to="/report/genericReport"> Informe Gastos </router-link>
                            </div>
                            <div class="m-link-item">
                                <router-link to="/report/comparationReport"> Ganancias Vs Ingresos </router-link>
                            </div>
                        </div>
                    </span>
                </div>
            </div>
            <div class="header-container-column-section">                
                <span class="toogle-activador">
                    <div class="header-info-container">
                        <div class="relative flex-center" v-if="personalData">
                            <font-awesome-icon class="special-icon" id="father-cog-icon" icon="user-circle" />
                            <div id="cog-icon" class="toogle-header-container" style="display: none">
                                <div class="header-row-link-section" @click="showCalculator()">
                                    <div class="toogle-header-container-row">
                                        <div class="toogle-header-container-column">
                                            <font-awesome-icon icon="calculator" />
                                        </div>
                                        <div class="toogle-header-container-column">
                                            <span class="m-mini-paragraph">Calculadora</span>
                                        </div>
                                    </div>
                                </div>
                                <router-link to="/configuration" class="header-row-link-section">
                                    <div class="toogle-header-container-row">
                                        <div class="toogle-header-container-column">
                                            <font-awesome-icon icon="cog" />
                                        </div>
                                        <div class="toogle-header-container-column">
                                            <span class="m-mini-paragraph">Administración</span>
                                        </div>
                                    </div>
                                </router-link>
                                <router-link to="/configuration" class="header-row-link-section">
                                    <div class="toogle-header-container-row">
                                        <div class="toogle-header-container-column">
                                            <font-awesome-icon icon="sign-out-alt" />
                                        </div>
                                        <div class="toogle-header-container-column">
                                            <span class="m-mini-paragraph">Salir</span>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                        <div v-if="personalData" class="header-info-container--title">
                            <span class="m-label">{{personalData.userData.name}}</span>
                            <span class="m-label">{{personalData.userData.lastname}}</span>
                        </div>
                    </div>
                </span>
            </div>  
        </div>
    </header>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: 'HeaderGeneric',
    data: function(){
        return {
            toggle: true,
        }
    },
    computed: {
        ...mapState('common', {
            "personalData": (state) => (state.personalData)
        })
    },
    mounted() {
        let userIcon = document.querySelector("#father-cog-icon");
        let options = document.querySelector(".toogle-header-container");
        document.addEventListener("click", (evt) => {
            if(evt.target === userIcon){
                options.style.display = "block";
            } else {
                userIcon.childNodes.forEach(x => {
                    if(evt.target === x){
                        options.style.display = "block";
                    } else {
                        options.style.display = "none"; 
                    }
                })
            }
        })
    },
    methods: {
        ...mapActions('common', [
            "updateCalculator"
        ]),
        showCalculator(){
            this.updateCalculator(true)
        }
    }
}
</script>