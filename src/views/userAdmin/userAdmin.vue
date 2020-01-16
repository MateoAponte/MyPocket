<template>
    <div class="m-general-container login-container">
        <ValidationObserver class="m-head-container" v-slot="{ handleSubmit }">
            <div class="m-card m-card--expand">
                <div class="m-card__section">
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
                <form @submit.prevent="handleSubmit(onSubmit)" class="m-card__section container-item__column relative">
                    <transition name="fade">
                        <div v-if="formMode === 'login'" class="container-item__column">
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
                                    No tienes una cuenta? <span class="m-link" @click="formMode = 'registrer'">Creala Aquí</span>
                                </span>
                            </div>
                        </div>
                    </transition>
                    <transition name="fade">
                        <div v-if="formMode !== 'login'" class="container-item__column">
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
                                    Si ya estas registrado clickea <span class="m-link" @click="formMode = 'login'">Aquí</span>
                                </span>
                            </div>
                        </div>
                    </transition>
                </form>
            </div>
        </ValidationObserver>
    </div>
</template>

<script>
export default {
    name: 'userAdmin',
    data: function(){
        return {
            loginData: {
                user: '',
                password: '',
            },
            registrerData: {
                name: '',
                lastname: '',
                budget: '',
                password: '',
                confirmPassword: ''
            },
            formMode: "login"
        }
    },
    methods: {
        onSubmit(){
            alert('suceesfull')
        }
    }
}
</script>