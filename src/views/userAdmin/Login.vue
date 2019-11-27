<template>
    <div class="m-general-container">
        <div class="m-head-container form-control">
            <div class="m-head-container-card">
                <div class="m-container-item--row--center">
                    <span class="m-title-big">
                        LOGIN
                    </span>
                </div>
                <div class="m-container-item--column">
                    <label class="m-label">
                        Nombre:
                    </label>
                    <input type="text" class="custom-form">
                </div>
                <div class="m-container-item--column">
                    <label class="m-label">
                        Apellido: 
                    </label>
                    <input type="text" class="custom-form">
                </div>
                <div class="m-container-item--column">
                    <label class="m-label">
                        Contraseña:
                    </label>
                    <input type="password" class="custom-form">
                </div>
                <div class="m-container-item--row">
                    <button class="m-button m-button-orange m-button-long">Ingresar</button>
                </div>
                <div class="m-container-item--column">
                    <span class="m-mini-paragraph">
                        Si no estas registrado Clickea <router-link to="/">Aquí</router-link>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login'
}
</script>