<template>
    <div class="container-item__column">
        <div class="container-item__row--center">
            <span class="m-title-big">
                REGISTRO
            </span>
        </div>
        <div class="container-item__row">
            <ValidationProvider class="container-item__column" name="nombre" rules="string" v-slot="{ errors }">
                <label class="m-label">
                    Nombre:
                </label>
                <input type="text" class="custom-form" placeholder="Ingrese su nombre" v-model="registrerData.name" />
                <span class="m-error">{{errors[0]}}</span>
            </ValidationProvider>
            <ValidationProvider class="container-item__column" name="apellido" rules="string" v-slot="{ errors }" >
                <label class="m-label">
                    Apellido:
                </label>
                <input type="text" class="custom-form" placeholder="Ingrese su apellido" v-model="registrerData.lastname" />
                <span class="m-error">{{errors[0]}}</span>
            </ValidationProvider>
        </div>
        <div class="container-item__row">
            <ValidationProvider class="container-item__column" name="presupuesto" rules="number" v-slot="{ errors }">
                <label class="m-label">
                    Presupuesto:
                </label>
                <input type="text" class="custom-form" placeholder="Ingrese su presupuesto" v-model="registrerData.budget" />
                <span class="m-error">{{errors[0]}}</span>
            </ValidationProvider>
        </div>
        <div class="container-item__row">
            <ValidationProvider class="container-item__column" name="contraseña" rules="password" v-slot="{ errors }">
                <label class="m-label">
                    Contraseña:
                </label>
                <input type="password" class="custom-form" placeholder="Ingrese la contraseña" v-model="registrerData.password" />
                <span class="m-error">{{errors[0]}}</span>
            </ValidationProvider>
        </div>
        <div class="container-item__row">
            <ValidationProvider class="container-item__column" name="confirmación" rules="password" v-slot="{ errors }">
                <label class="m-label">
                    Confirma Contraseña:
                </label>
                <input type="password" class="custom-form" placeholder="Ingrese la confirmación de su contraseña" v-model="registrerData.confirmPassword" />
                <span class="m-error">{{errors[0]}}</span>
            </ValidationProvider>
        </div>
        <div class="container-item__row">
            <button class="m-button m-button-esmerald m-button-long" type="submit">Ingresar</button>
        </div>
        <div class="container-item__row">
            <span class="m-small">
                Si ya estas registrado clickea <span class="m-link" @click="updateFormType('login')">Aquí</span>
            </span>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: "registrerPanel",
    data: function() {
        return {
            registrerData: {
                name: '',
                lastname: '',
                budget: '',
                password: '',
                confirmPassword: ''
            }
        }
    },
    methods: {
        ...mapActions('userAdmin', [
            "updateFormType"
        ])
    },
}
</script>