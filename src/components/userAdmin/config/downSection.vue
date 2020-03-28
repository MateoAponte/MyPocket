<template>
    <div class="container-item__row">
        <div class="m-card__section container-item__column">
            <div class="container-item__row">
                <div class="container-item__column">
                    <label class="m-label">
                        Correo:
                    </label>
                    <input type="text" class="custom-form" placeholder="Ingrese su contraseña" v-model="personalData.userData.email" />
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
                            <input id="hight" name="prority" type="radio" value="monthly" v-model="personalData.userData.entryCost" />
                            <label for="hight" class="radio-label">Mensual</label>
                        </div>
                    </div>
                    <div class="container-item__column">
                        <div class="radio-button">
                            <input id="medium" name="prority" type="radio" value="biweekly" v-model="personalData.userData.entryCost" />
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
                    <toggle-button v-model="showPassword" />
                </div>
            </div>
            <transition v-if="showPassword">
                <div class="container-item__row">
                    <div class="container-item__column">
                        <label class="m-label">
                            Nueva contraseña:
                        </label>
                        <input type="password" class="custom-form" placeholder="Ingrese su contraseña" v-model="password" />
                    </div>
                    <div class="container-item__column">
                        <label class="m-label">
                            Confirmación:
                        </label>
                        <input type="password" class="custom-form"
                            placeholder="Ingrese la confirmación de su contraseña" v-model="confirmPassword" />
                    </div>
                </div>
            </transition>
            <div class="container-item__row">
                <button class="m-button m-button-esmerald m-button-long" @click="saveUserData()" >Guardar</button>
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
    import { mapState, mapActions } from 'vuex';
    export default {
        name: "downSection",
        data: function () {
            return {
                showPassword: false,
                password: "",
                confirmPassword: ""
            }
        },
        computed: {
            ...mapState('common', {
                "personalData": (state) => (state.personalData)
            }),
        },
        methods: {
            ...mapActions('common', [
                'updatePersonalData'
            ]),
            saveUserData(){
                this.updatePersonalData(this.personalData);
            }
        }
    }
</script>