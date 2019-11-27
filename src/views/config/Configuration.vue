<template>
    <div class="m-general-container">
        <div class="m-head-container form-control">
            <div class="m-head-container-card">
                <div class="m-container-item--row--center">
                    <span class="m-title-big">
                        CONFIGURACIÓN
                    </span>
                </div>
                <div class="m-container-item--row">
                    <div class="m-container-item--column">
                        <label class="m-label">
                            Eres:
                        </label>
                        <input type="text" class="custom-form">
                    </div>
                    <div class="m-container-item--column">
                        <input type="text" class="custom-form">
                    </div>
                </div>
                <div class="m-container-item--row">
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
                </div>
                <div class="m-container-item--row">
                    <div class="m-container-item--column--mini">
                        <label class="m-label">
                            Interes:
                        </label>
                        <input type="text" class="custom-form">
                    </div>
                    <div class="m-container-item--column">
                        <label class="m-label">
                            Presupuesto:
                        </label>
                        <input type="text" class="custom-form">
                    </div>
                </div>
                <div class="m-container-item--row">
                    <div class="m-container-item--column">
                        <label class="m-label">
                            Contraseña:
                        </label>
                        <input type="password" class="custom-form">
                    </div>
                </div>
                <div class="m-container-item--row">
                    <div class="m-container-item--column">
                        <label class="m-label">
                            Confirmación:
                        </label>
                        <input type="password" class="custom-form">
                    </div>
                </div>
                <div class="m-container-item--row">
                    <button class="m-button m-button-turquese m-button-long">Guardar</button>
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