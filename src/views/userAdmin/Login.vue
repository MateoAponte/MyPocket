<template>
    <div class="m-general-container login-container">
        <ValidationObserver class="m-head-container" v-slot="{ handleSubmit }">
            <div class="m-head-container-card">
                <div class="container-item__row--center">
                    <span class="m-title-big form__title">
                        MyPocket
                    </span>
                </div>
                <div class="container-item__row">
                    <img class="m-img" src="@Assets/img/analitycsFinance.png" alt="">
                </div>
                <div class="container-item__row">
                    <div class="form__item">
                        <img class="m-img" src="@Assets/img/expensesOnHand.png" alt="">
                    </div>
                    <div class="form__item">
                        <p class="m-title"> Tus gastos , calculos y balances en una simple y practica interfaz </p>
                    </div>
                </div>
            </div>
            <form @submit.prevent="handleSubmit(onSubmit)" class="m-head-container-card">
                <div class="container-item__row--center">
                    <span class="m-title-big">
                        Login
                    </span>
                </div>
                <div class="container-item__row--center">
                    <img class="m-form-img" src="@Assets/img/Pocket.png" alt="">
                </div>
                <div class="container-item__row">
                    <ValidationProvider class="container-item__column" name="user" rules="string" v-slot="{ errors }">
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
                    <div class="container-item__column">
                        <span class="m-label">
                            No tienes una cuenta? <router-link to="/" class="m-button m-button-esmerald">Aquí</router-link>
                        </span>
                    </div>
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
                user: '',
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