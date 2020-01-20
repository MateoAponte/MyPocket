<template>
    <div class="container-item__column">
        <div class="container-item__row--center">
            <span class="m-title-big">
                LOGIN
            </span>
        </div>
        <div class="container-item__row--center">
            <img class="m-form-img" src="@Assets/img/Pocket.png" alt="">
        </div>
        <div class="container-item__row">
            <ValidationProvider class="container-item__column" name="usuario" rules="string" v-slot="{ errors }">
                <label class="m-label">
                    UserName:
                </label>
                <input type="text" class="custom-form" placeholder="Ingrese el usuario" v-model="loginData.user"/>
                <span class="m-error">{{errors[0]}}</span>
            </ValidationProvider>
        </div>
        <div class="container-item__row">
            <ValidationProvider class="container-item__column" name="contraseña" rules="password" v-slot="{ errors }">
                <label class="m-label">
                    Contraseña:
                </label>
                <input type="password" class="custom-form" placeholder="Ingrese su contraseña" v-model="loginData.password"/>
                <span class="m-error">{{errors[0]}}</span>
            </ValidationProvider>
        </div>
        <div class="container-item__row">
            <button class="m-button m-button-esmerald m-button-long" type="submit">Ingresar</button>
        </div>
        <div class="container-item__row">
            <span class="m-small">
                No tienes una cuenta? <span class="m-link" @click="updateFormType('registrer')">Creala Aquí</span>
            </span>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: "loginPanel",
    data: function() {
        return {
            loginData: {
                user: '',
                password: '',
            },
        }
    },
    methods: {
        ...mapActions('userAdmin', [
            "updateFormType"
        ])
    },
}
</script>