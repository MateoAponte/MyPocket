<template>
    <div class="overlay hide">
        <transition name="slide">
            <notification-modal 
                v-if="modalData.type == 'notification'" 
                :type="modalData.type" 
                :title="modalData.title"
                :subject="modalData.subject" 
                :action="modalData.action"
                width="400px" 
            >
                <template #footer>
                    <button class="m-button" @click="dimissLoginModal()">Cerrar</button>
                </template>
            </notification-modal>
        </transition>
        <transition name="slide">
            <summary-filter-modal 
                v-if="modalData.type == 'filter'" 
                :type="modalData.type" 
                :title="modalData.title"
                :subject="modalData.subject" 
                :action="modalData.action"
                width="1200px" 
            >
                <template #footer>
                    <button class="m-button" @click="dimissModal()">Cerrar</button>
                </template>
            </summary-filter-modal>
        </transition>
    </div>
</template>

<script>
import notificationModal from "@Components/Modals/notification";
import summaryFilterModal from "@Components/Modals/summaryFilter";
import { mapState } from 'vuex';

export default {
    name: "modalContainer",
    components: {
        notificationModal,
        summaryFilterModal
    },
    computed: {
        ...mapState('common', {
            "modalData": (state) => (state.modalData)
        })
    },
    methods: {
        dimissLoginModal(){
            app.dimissModal();
            if(this.modalData.title == "success"){
                this.$router.push('finance');
            }
        },
        dimissModal(){
            app.dimissModal();
        }
    }
}
</script>