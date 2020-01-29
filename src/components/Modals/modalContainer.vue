<template>
    <div class="overlay hide">
        <notification-modal 
            v-if="modalData.type == 'notification'" 
            :type="modalData.type" 
            :title="modalData.title"
            :subject="modalData.subject" 
            :action="modalData.action"
            width="400px" 
        >
            <template #footer>
                <button class="m-button" @click="dimissModal()">Cerrar</button>
            </template>
        </notification-modal>
    </div>
</template>

<script>
import notificationModal from "@Components/Modals/notification";
import { mapState } from 'vuex';

export default {
    name: "modalContainer",
    components: {
        notificationModal
    },
    computed: {
        ...mapState('common', {
            "modalData": (state) => (state.modalData)
        })
    },
    methods: {
        dimissModal(){
            app.dimissModal();
            if(this.modalData.title == "success"){
                this.$router.push('finance')
            }
        }
    }
}
</script>