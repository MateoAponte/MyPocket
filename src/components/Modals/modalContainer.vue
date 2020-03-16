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
        <transition name="slide">
            <edit-item-modal
                v-if="modalData.type == 'edit'" 
                :type="modalData.type" 
                :title="modalData.title"
                :subject="modalData.subject" 
                :action="modalData.action"
                :modalData="modalData.injectData"
                width="500px" 
            >
                <template #footer>
                    <button class="m-button" @click="dimissModal()">Cerrar</button>
                </template>
            </edit-item-modal>
        </transition>
    </div>
</template>

<script>
import notificationModal from "@Components/Modals/notification";
import summaryFilterModal from "@Components/Modals/summaryFilter";
import editItemModal from "@Components/Modals/editItem";
import { mapState } from 'vuex';

export default {
    name: "modalContainer",
    components: {
        notificationModal,
        summaryFilterModal,
        editItemModal
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