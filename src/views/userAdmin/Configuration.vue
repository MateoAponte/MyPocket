<template>
    <div class="m-general-container form-container config">
        <div class="m-head-container">
            <div class="m-card m-card--expand">
                <div class="container-item__row">
                    <div class="container-item__column">
                        <label class="m-title-big">
                            CONFIGURACIÓN:
                        </label>
                    </div>  
                </div>
                <upper-section />
                <down-section />
            </div>
        </div>
    </div>
</template>

<script>
import upperSection from "@Components/userAdmin/config/upperSection";
import downSection from "@Components/userAdmin/config/downSection";

export default {
    name: 'Configuration',
    components: {
        upperSection,
        downSection
    },
    data: function(){
        return {
            userConfig: {
                ocupation: '',
                name: '',
                lastname: '',
                added: '',
                bugnet: '',
                password: '',
                confirmPassword: ''
            }
        }
    },
    computed: {
        readOffice: {
            set(newVal){
                if(newVal == 'Estudiante'){
                    this.userConfig.added = '0'
                }
                return this.userConfig.ocupation = newVal;
            },
            get(){
                return this.userConfig.ocupation;
            }
        }
    }
}
</script>