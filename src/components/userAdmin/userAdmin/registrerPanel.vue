<template>
    <ValidationObserver tag="form" v-slot="{ handleSubmit, invalid }" @submit.prevent="onSubmit()" class="container-item__column">
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
                <input type="text" class="custom-form" placeholder="Ingrese su nombre" v-model="userData.name" />
                <span class="m-error">{{errors[0]}}</span>
            </ValidationProvider>
            <ValidationProvider class="container-item__column" name="apellido" rules="string" v-slot="{ errors }" >
                <label class="m-label">
                    Apellido:
                </label>
                <input type="text" class="custom-form" placeholder="Ingrese su apellido" v-model="userData.lastname" />
                <span class="m-error">{{errors[0]}}</span>
            </ValidationProvider>
        </div>
        <div class="container-item__row">
            <ValidationProvider class="container-item__column" name="usuario" rules="radio" v-slot="{ errors }">
                <label class="m-label">
                    Usuario:
                </label>
                <input type="text" class="custom-form" placeholder="Ingrese el Usuario" v-model="userData.user" />
                <span class="m-error">{{errors[0]}}</span>
            </ValidationProvider>
        </div>
        <div class="container-item__row">
            <ValidationProvider class="container-item__column" name="presupuesto" rules="number" v-slot="{ errors }">
                <label class="m-label">
                    Presupuesto:
                </label>
                <input type="text" class="custom-form" placeholder="Ingrese su presupuesto" v-model="userData.budget" />
                <span class="m-error">{{errors[0]}}</span>
            </ValidationProvider>
        </div>
        <div class="container-item__row">
            <ValidationProvider class="container-item__column" name="contraseña" rules="password" v-slot="{ errors }">
                <label class="m-label">
                    Contraseña:
                </label>
                <input type="password" class="custom-form" placeholder="Ingrese la contraseña" v-model="userData.password" />
                <span class="m-error">{{errors[0]}}</span>
            </ValidationProvider>
            <ValidationProvider class="container-item__column" name="confirmación" rules="password" v-slot="{ errors }">
                <label class="m-label">
                    Confirma Contraseña:
                </label>
                <input type="password" class="custom-form" placeholder="Ingrese la confirmación de su contraseña" v-model="userData.confirmPassword" />
                <span class="m-error">{{errors[0]}}</span>
            </ValidationProvider>
        </div>
        <div class="container-item__row">
            <button :disabled="invalid" class="m-button m-button-esmerald m-button-long" type="submit">Ingresar</button>
        </div>
        <div class="container-item__row">
            <span class="m-small">
                Si ya estas registrado clickea <span class="m-link" @click="updateFormType('login')">Aquí</span>
            </span>
        </div>
    </ValidationObserver>
</template>

<script>
import { mapActions } from 'vuex';
import axios from 'axios';

export default {
    name: "registrerPanel",
    data: function() {
        return {
            userData: {
                name: '',
                lastname: '',
                user: '',
                budget: '',
                password: '',
                confirmPassword: '',
                status: 'notExist'
            }
        }
    },
    methods: {
        ...mapActions('userAdmin', [
            "updateFormType"
        ]),
        onSubmit(){
            axios.post("/registrer", { userData: this.userData})
                .then((res) => {
                    this.updateFormType('login')
                })
        }
    },
}
</script>