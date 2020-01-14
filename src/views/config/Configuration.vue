<template>
    <div class="m-general-container">
        <div class="m-head-container form-control">
            <div class="m-head-container-card">
                <div class="container-item__row--center">
                    <span class="m-title-big">
                        CONFIGURACIÓN
                    </span>
                </div>
                <div class="container-item__row">
                    <span class="m-mini-paragraph">
                        Necesitamos que confirme su información para poder continuar; <br/>Por favor, llene y confirme estos datos:
                    </span>
                </div>
                <div class="container-item__row">
                    <div class="container-item__column">
                        <label class="m-label">
                            Info:
                        </label>
                        <input type="radio" name="size" id="info_1" value="Trabajador" v-model="readOffice"/>
                        <label class="special-label" for="info_1">Trabajador</label>
                    </div>
                    <div class="container-item__column">
                        <input type="radio" name="size" id="info_2" value="Estudiante" v-model="readOffice" />
                        <label class="special-label" for="info_2">Estudiante</label>
                    </div>
                </div>
                <div class="container-item__row">
                    <div class="container-item__column">
                        <label class="m-label">
                            Nombre:
                        </label>
                        <input type="text" class="custom-form"  placeholder="Ingrese su nombre" v-model="userConfig.name" />
                    </div>
                    <div class="container-item__column">
                        <label class="m-label">
                            Apellido:
                        </label>
                        <input type="text" class="custom-form" placeholder="Ingrese su apellido" v-model="userConfig.lastname" />
                    </div>
                </div>
                <div class="container-item__row">
                    <div class="container-item__column--mini">
                        <label class="m-label">
                            Interes:
                        </label>
                        <input type="text" class="custom-form" placeholder="0%" v-model="userConfig.added" :disabled="readOffice === 'Estudiante'" />
                    </div>
                    <div class="container-item__column">
                        <label class="m-label">
                            Presupuesto:
                        </label>
                        <input type="text" class="custom-form"  placeholder="Ingrese su presupuesto" v-model="userConfig.bugnet"/>
                    </div>
                </div>
                <div class="container-item__row">
                    <div class="container-item__column">
                        <label class="m-label">
                            Contraseña:
                        </label>
                        <input type="password" class="custom-form"  placeholder="Ingrese su contraseña" v-model="userConfig.password" />
                    </div>
                </div>
                <div class="container-item__row">
                    <div class="container-item__column">
                        <label class="m-label">
                            Confirmación:
                        </label>
                        <input type="password" class="custom-form"  placeholder="Ingrese la confirmación de su contraseña" v-model="userConfig.confirmPassword" />
                    </div>
                </div>
                <div class="container-item__row">
                    <button class="m-button m-button-esmerald m-button-long">Guardar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data: function(){
        return {
            userConfig: {
                ocupation: '',
                name: '',
                lastname: '',
                added: '',
                bugnet: '',
                password: '',
                confirmPassword: ''
            }
        }
    },
    computed: {
        readOffice: {
            set(newVal){
                if(newVal == 'Estudiante'){
                    this.userConfig.added = '0'
                }
                return this.userConfig.ocupation = newVal;
            },
            get(){
                return this.userConfig.ocupation;
            }
        }
    }
}
</script>