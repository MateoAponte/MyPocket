<template>
    <div class="m-general-container form-container config">
        <div class="m-head-container">
            <div class="m-card m-card--expand">
                <div class="container-item__row">
                    <div class="container-item__column">
                        <label class="m-title-big">
                            CONFIGURACIÓN:
                        </label>
                    </div>  
                </div>
                <div class="container-item__row">
                    <div class="m-card__section container-item__column">
                        <div class="container-item__row">
                            <img class="m-img" src="@Assets/img/MaquinaryPocket.png" alt="">
                        </div>
                    </div>
                    <div class="m-card__section container-item__column">
                        <div class="container-item__row special-inputs">
                            <div class="container-item__column">
                                <label class="m-label">
                                    Info:
                                </label>
                                <input type="radio" name="size" id="info_1" value="Trabajador" />
                                <label class="special-label" for="info_1">
                                    <span class="m-value-bolder">Independiente</span> 
                                    <font-awesome-icon icon="tools" />
                                </label>
                            </div>
                            <div class="container-item__column">
                                <input type="radio" name="size" id="info_2" value="Estudiante" />
                                <label class="special-label" for="info_2">
                                    <span class="m-value-bolder">Estudiante</span> 
                                    <font-awesome-icon icon="book" />
                                </label>
                            </div>
                            <div class="container-item__column">
                                <input type="radio" name="size" id="info_3" value="Independiente" />
                                <label class="special-label" for="info_3">
                                    <span class="m-value-bolder">Independiente</span> 
                                    <font-awesome-icon icon="user" />
                                </label>
                            </div>
                        </div>
                        <div class="container-item__row">
                            <div class="container-item__column">
                                <label class="m-label">
                                    Nombre:
                                </label>
                                <input type="text" class="custom-form"  placeholder="Ingrese su nombre" />
                            </div>
                            <div class="container-item__column">
                                <label class="m-label">
                                    Apellido:
                                </label>
                                <input type="text" class="custom-form" placeholder="Ingrese su apellido" />
                            </div>
                        </div>
                        <div class="container-item__row">
                            <div class="container-item__column--mini">
                                <label class="m-label">
                                    Interes:
                                </label>
                                <input type="text" class="custom-form" placeholder="0%" />
                            </div>
                            <div class="container-item__column">
                                <label class="m-label">
                                    Presupuesto:
                                </label>
                                <input type="text" class="custom-form"  placeholder="Ingrese su presupuesto" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-item__row">
                    <div class="m-card__section container-item__column">
                        <div class="container-item__row">
                            <div class="container-item__column">
                                <label class="m-label">
                                    Correo:
                                </label>
                                <input type="password" class="custom-form"  placeholder="Ingrese su contraseña" />
                            </div>
                        </div>
                        <div class="container-item__row">
                            <div class="container-item__column container-item__col-row">
                                <div class="container-item__column--medium">
                                    <label class="m-label">
                                        Forma de pago:
                                    </label>
                                </div>
                                <div class="container-item__column">
                                    <div class="radio-button">
                                        <input id="hight" name="prority" type="radio" value="Alta" />
                                        <label for="hight" class="radio-label">Mensual</label>
                                    </div>
                                </div>
                                <div class="container-item__column">
                                    <div class="radio-button">
                                        <input id="medium" name="prority" type="radio" value="Media" />
                                        <label for="medium" class="radio-label">Quincenal</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container-item__row simple-column--underline">
                            <div class="container-item__column">
                                <label class="m-label">
                                    Cambiar contraseña:
                                </label>
                            </div>
                            <div class="container-item__column simple-column-left">
                                <div class="toggle-button-cover">
                                    <div class="button-cover">
                                        <div class="button r" id="button-3">
                                            <input type="checkbox" value="on" class="checkbox" v-model="showPassword" :checked="showPassword == 'on'">
                                            <div class="knobs"></div>
                                            <div class="layer"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <transition v-if="!showPassword">
                            <div class="container-item__row">
                                <div class="container-item__column">
                                    <label class="m-label">
                                        Contraseña Actual:
                                    </label>
                                    <input type="password" class="custom-form"  placeholder="Ingrese su contraseña" />
                                </div>
                                <div class="container-item__column">
                                    <label class="m-label">
                                        Confirmación:
                                    </label>
                                    <input type="password" class="custom-form"  placeholder="Ingrese la confirmación de su contraseña" />
                                </div>
                            </div>
                        </transition>
                        <div class="container-item__row">
                            <button class="m-button m-button-esmerald m-button-long">Guardar</button>
                        </div>
                    </div>
                    <div class="m-card__section container-item__column">
                        <div class="container-item__row">
                            <img class="m-img" src="@Assets/img/FinanceGrown.png" alt="">
                        </div>
                    </div>
                </div>
            <!-- <div class="container-item__row">
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
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Configuration',
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
            },
            showPassword: "off"
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