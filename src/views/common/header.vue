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
                <router-link to="/finance" class="m-link-container" active-class="m-link-active" >Finanzas</router-link>
                <router-link to="/graphics" class="m-link-container" active-class="m-link-active" >Resumen</router-link>
                <router-link to="/graphics" class="m-link-container" active-class="m-link-active" >Balance</router-link>
                <router-link to="/graphics" class="m-link-container" active-class="m-link-active" >Configuración</router-link>
            </div>
            <div class="header-container-column-section">                
                <span class="toogle-activador">
                    <div class="header-info-container">
                        <div class="relative flex-center">
                            <font-awesome-icon class="special-icon" id="father-cog-icon" icon="user-circle" />
                            <div id="cog-icon" class="toogle-header-container" style="display: none">
                                <router-link to="/configuration" class="header-row-link-section">
                                    <div class="toogle-header-container-row">
                                        <div class="toogle-header-container-column">
                                            <font-awesome-icon icon="calculator" />
                                        </div>
                                        <div class="toogle-header-container-column">
                                            <span class="m-mini-paragraph">Calculadora</span>
                                        </div>
                                    </div>
                                </router-link>
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
                        <div class="header-info-container--title">
                            <span class="m-label">Mateo</span>
                            <span class="m-label">Aponte</span>
                        </div>
                    </div>
                </span>
            </div>  
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderGeneric',
    data: function(){
        return {
            toogle: true
        }
    }
}
</script>