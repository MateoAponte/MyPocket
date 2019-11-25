<template>
    <header class="header-container">
        <div class="header-container-column">
            <router-link to="/#" class="m-link-container" active-class="m-link-active">
                <span class="m-link">
                    Provisional
                </span>
            </router-link>
        </div>
        <div class="header-container-column">
            <router-link to="/" class="m-link-container" active-class="m-link-active">
                <span class="m-link">
                    Financias
                </span>
            </router-link>
            <router-link to="/#" class="m-link-container" active-class="m-link-active">
                <span class="m-link">
                    Graficas
                </span>
            </router-link>
        </div>
        <div class="header-container-column">
            <span class="icon-calculator">
                C
            </span>
            <span class="separator">.</span>
            <span class="m-title">
                Mateo Aponte
            </span>
            <span class="icon-calculator">
                I
            </span>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderGeneric'
}
</script>