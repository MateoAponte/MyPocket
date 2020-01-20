<template>
    <div class="m-general-container form-container login">
        <ValidationObserver class="m-head-container" v-slot="{ handleSubmit }">
            <div class="m-card m-card--expand">
                <div class="container-item__row">
                    <left-panel />
                    <form @submit.prevent="handleSubmit(onSubmit)" class="m-card__section container-item__column">
                        <transition name="fade">
                            <login-panel v-if="formType === 'login'"/>
                        </transition>
                        <transition name="fade">
                            <registrer-panel v-if="formType === 'registrer'"/>
                        </transition>
                    </form>
                </div>
            </div>
        </ValidationObserver>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import LeftPanel from '@Components/userAdmin/userAdmin/leftPanel';
import loginPanel from '@Components/userAdmin/userAdmin/loginPanel';
import registrerPanel from '@Components/userAdmin/userAdmin/registrerPanel';
export default {
    name: 'userAdmin',
    components: {
        LeftPanel,
        loginPanel,
        registrerPanel
    },
    computed: {
        ...mapState('userAdmin', {
            "formType": (state) => (state.formType)
        })
    },
    methods: {
        onSubmit(){
            alert('suceesfull')
        }
    }
}
</script>