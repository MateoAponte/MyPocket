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
            <ul class="header-container-column-section">
                <li class="m-link-container">
                    <span class="m-link">Finanzas</span>
                    <ul class="m-link-dropdown">
                        <li class="m-link-item">
                            <router-link to="/finance/expenses">
                                <span class="m-link">Gastos</span>
                            </router-link>
                        </li>
                        <li class="m-link-item">
                            <router-link to="/finance/earnings">
                                <span class="m-link">Ingresos</span>
                            </router-link>
                        </li>
                        <li class="m-link-item">
                            <router-link to="/finance/savings">
                                <span class="m-link">Ahorros</span>
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li class="m-link-container">
                    <router-link to="/summary">
                        <span class="m-link">Resumen</span>
                    </router-link>
                </li>
                <li class="m-link-container">
                    <router-link to="/icons">
                        <span class="m-link">Iconos</span>
                    </router-link>
                </li>
                <li class="m-link-container">
                    <router-link to="/configuration">
                        <span class="m-link">Configuración</span>
                    </router-link>
                </li>
                <li class="m-link-container">
                    <span class="m-link">Finanzas</span>
                    <ul class="m-link-dropdown">
                        <li class="m-link-item">
                            <router-link to="/report/genericReport">
                                <span class="m-link">Informe Gastos</span>
                            </router-link>
                        </li>
                        <li class="m-link-item">
                            <router-link to="/report/comparationReport">
                                <span class="m-link">Informe comparativo</span>
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
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