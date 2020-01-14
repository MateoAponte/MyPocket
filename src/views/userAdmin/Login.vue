<template>
    <div class="m-general-container">
        <ValidationObserver class="m-head-container" v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(onSubmit)" class="m-head-container-card">
                <div class="container-item__row--center">
                    <span class="m-title-big">
                        LOGIN
                    </span>
                </div>
                <div class="container-item__row">
                    <ValidationProvider class="container-item__column" name="nombre" rules="string" v-slot="{ errors }">
                        <label class="m-label">
                            Nombre:
                        </label>
                        <input type="text" class="custom-form" placeholder="Ingrese su nombre" v-model="loginData.name"/>
                        <span class="m-error">{{errors[0]}}</span>
                    </ValidationProvider>
                    <ValidationProvider class="container-item__column" name="apellido" rules="string" v-slot="{ errors }">
                        <label class="m-label">
                            Apellido:
                        </label>
                        <input type="text" class="custom-form" placeholder="Ingrese su apellido" v-model="loginData.lastname"/>
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
                <div class="container-item__column">
                    <span class="m-mini-paragraph">
                        Si no estas registrado Clickea <router-link to="/">Aquí</router-link>
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
            loginData: {
                name: '',
                lastname: '',
                password: '',
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