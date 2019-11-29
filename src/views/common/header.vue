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
            <router-link to="/finance" class="m-link-container" active-class="m-link-active">
                <span class="m-link">
                    Financias
                </span>
            </router-link>
            <router-link to="/graphics" class="m-link-container" active-class="m-link-active">
                <span class="m-link">
                    Graficas
                </span>
            </router-link>
        </div>
        <div class="header-container-column">
            <div class="header-container-row">
                <div class="header-container-column toogle-content">
                    <span>
                        icon
                    </span>
                    <span class="separator">
                        .
                    </span>
                    <span class="m-title">

                    </span>
                </div>
                <span class="toogle-activador">
                    <font-awesome-icon icon="cog" />
                </span>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderGeneric'
}
</script>