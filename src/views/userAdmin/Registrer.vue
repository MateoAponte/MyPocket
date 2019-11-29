<template>
    <div class="m-general-container">
        <ValidationObserver class="m-head-container" v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(onSubmit)" class="m-head-container-card">
                <div class="m-container-item--row--center">
                    <span class="m-title-big">
                        REGISTRO
                    </span>
                </div>
                <div class="m-container-item--row">
                    <ValidationProvider class="m-container-item--column" name="nombre" rules="string" v-slot="{ errors }">
                        <label class="m-label">
                            Nombre:
                        </label>
                        <input type="text" class="custom-form" placeholder="Ingrese su nombre" v-model="registrerData.name" />
                        <span class="m-error">{{errors[0]}}</span>
                    </ValidationProvider>
                    <ValidationProvider class="m-container-item--column" name="apellido" rules="string" v-slot="{ errors }" >
                        <label class="m-label">
                            Apellido:
                        </label>
                        <input type="text" class="custom-form" placeholder="Ingrese su apellido" v-model="registrerData.lastname" />
                        <span class="m-error">{{errors[0]}}</span>
                    </ValidationProvider>
                </div>
                <div class="m-container-item--row">
                    <ValidationProvider class="m-container-item--column" name="presupuesto" rules="number" v-slot="{ errors }">
                        <label class="m-label">
                            Presupuesto:
                        </label>
                        <input type="text" class="custom-form" placeholder="Ingrese su presupuesto" v-model="registrerData.budget" />
                        <span class="m-error">{{errors[0]}}</span>
                    </ValidationProvider>
                </div>
                <div class="m-container-item--row">
                    <ValidationProvider class="m-container-item--column" name="contraseña" rules="password" v-slot="{ errors }">
                        <label class="m-label">
                            Contraseña:
                        </label>
                        <input type="password" class="custom-form" placeholder="Ingrese la contraseña" v-model="registrerData.password" />
                        <span class="m-error">{{errors[0]}}</span>
                    </ValidationProvider>
                </div>
                <div class="m-container-item--row">
                    <ValidationProvider class="m-container-item--column" name="confirmación" rules="password" v-slot="{ errors }">
                        <label class="m-label">
                            Confirma Contraseña:
                        </label>
                        <input type="password" class="custom-form" placeholder="Ingrese la confirmación de su contraseña" v-model="registrerData.confirmPassword" />
                        <span class="m-error">{{errors[0]}}</span>
                    </ValidationProvider>
                </div>
                <div class="m-container-item--row">
                    <button class="m-button m-button-esmerald m-button-long" type="submit">Ingresar</button>
                </div>
                <div class="m-container-item--column">
                    <span class="m-mini-paragraph">
                        Si ya estas registrado clickea <router-link to="/">Aquí</router-link>
                    </span>
                </div>
            </form>
        </ValidationObserver>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data: function(){
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
        onSubmit(){
            alert('suceesfull')
        }
    }
}
</script>