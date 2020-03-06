<template>
    <div class="m-container-row" v-if="selectedArray.iconData">
        <span class="m-dropdown-icon">
            <font-awesome-icon icon="chevron-circle-up" @click="uploadDropDownToggle(!dropDownToggle)"
                :style="{ transform: dropDownToggle ? 'rotate(180deg)' : 'rotate(360deg)' }" />
        </span>
        <transition name="slide-down">
            <div class="m-card" v-if="dropDownToggle">
                <div class="m-card-body">
                    <div class="container-item__row flex-center">
                        <div class="container-item__column simple-column-right">
                            <span class="m-title-big">
                                Categoría:
                            </span>
                        </div>
                        <div class="container-item__column simple-column-left">
                            <span class="m-label">
                                {{selectedArray.iconData.category}}
                            </span>
                        </div>
                    </div>
                    <div class="container-item__column">
                        <div class="container-item__row flex-center">
                            <div class="container-item__column" v-for="(arr, index) in selectedArray.categoryData"
                                :key="index">
                                <summary-cards :data="arr" container="toggle" />
                            </div>
                        </div>
                    </div>
                    <div class="container-item__row flex-center">
                        <div class="container-item__column simple-column-right">
                            <span class="m-label">
                                Total:
                            </span>
                        </div>
                        <div class="container-item__column simple-column-left">
                            <span class="m-label">
                                {{numeral(selectedArray.cost).format('$0,0')}}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import summaryCards from './summaryCard';
import { mapState, mapActions } from 'vuex';
    export default {
        name: "summaryToggle",
        components: {
            summaryCards  
        },
        computed: {
            ...mapState('summary', {
                "selectedArray": (state) => state.selectedArray,
                'dropDownToggle': (state) => state.dropDownToggle
            }),
        },
        methods: {
            ...mapActions('summary', [
                "uploadDropDownToggle"
            ])
        },
    }
</script>