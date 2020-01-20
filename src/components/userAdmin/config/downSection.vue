<template>
    <div class="container-item__row">
        <div class="m-card__section container-item__column">
            <div class="container-item__row">
                <div class="container-item__column">
                    <label class="m-label">
                        Correo:
                    </label>
                    <input type="password" class="custom-form" placeholder="Ingrese su contraseña" />
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
                                <input type="checkbox" value="on" class="checkbox" v-model="showPassword"
                                    :checked="showPassword == 'on'">
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
                        <input type="password" class="custom-form" placeholder="Ingrese su contraseña" />
                    </div>
                    <div class="container-item__column">
                        <label class="m-label">
                            Confirmación:
                        </label>
                        <input type="password" class="custom-form"
                            placeholder="Ingrese la confirmación de su contraseña" />
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
</template>

<script>
    export default {
        name: "downSection",
        data: function () {
            return {
                showPassword: "off"
            }
        }
    }
</script>