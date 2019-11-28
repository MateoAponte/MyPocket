<template>
    <div class="m-general-container">
        <div class="m-head-container form-control">
            <div class="m-head-container-card">
                <div class="m-container-item--row--center">
                    <span class="m-title-big">
                        REGISTRO
                    </span>
                </div>
                <div class="m-container-item--row">
                    <div class="m-container-item--column">
                        <label class="m-label">
                            Nombre:
                        </label>
                        <input type="text" class="custom-form" placeholder="Ingrese su nombre">
                    </div>
                    <div class="m-container-item--column">
                        <label class="m-label">
                            Apellido:
                        </label>
                        <input type="text" class="custom-form" placeholder="Ingrese su apellido">
                    </div>
                </div>
                <div class="m-container-item--row">
                    <div class="m-container-item--column">
                        <label class="m-label">
                            Presupuesto:
                        </label>
                        <input type="text" class="custom-form" placeholder="Ingrese su presupuesto">
                    </div>
                </div>
                <div class="m-container-item--row">
                    <div class="m-container-item--column">
                        <label class="m-label">
                            Contraseña:
                        </label>
                        <input type="password" class="custom-form" placeholder="Ingrese la contraseña">
                    </div>
                </div>
                <div class="m-container-item--row">
                    <div class="m-container-item--column">
                        <label class="m-label">
                            Confirma Contraseña:
                        </label>
                        <input type="password" class="custom-form" placeholder="Ingrese la confirmación de su contraseña">
                    </div>
                </div>
                <div class="m-container-item--row">
                    <button class="m-button m-button-esmerald m-button-long">Ingresar</button>
                </div>
                <div class="m-container-item--column">
                    <span class="m-mini-paragraph">
                        Si ya estas registrado clickea <router-link to="/">Aquí</router-link>
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