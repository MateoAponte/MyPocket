<template>
    <div class="container-item__column">
        <div class="m-card">
            <div class="m-card-body max-height-card relative">
                <div class="container-item__row minify-padding fixed">
                    <div class="container-item__icon expense">
                        <span class="container-item-status__title">
                            Prioridad
                        </span>
                    </div>
                    <div class="container-item-info expense">
                        <div class="container-item-info--column">
                            <span class="container-item-info__item__title">
                                Ingresos
                            </span>
                        </div>
                    </div>
                    <div class="container-item-actions expense">
                        <span class="container-item-actions__title">
                            Acciones
                        </span>
                    </div>
                </div>
                 <div class="container-item" v-for="(data, index) in earningData" :key="data">
                    <div class="container-item__icon expense">
                        <div class="relative container-item__icon__item long-icon">
                            <span class="icons-category">
                                <font-awesome-icon :icon="data.iconData.iconName" :style="{ backgroundColor:data.iconData.class }"/>
                            </span>
                        </div>
                        <div class="relative container-item__icon__item">
                            <span class="m-paragraph item-overflow">{{data.iconData.category}}</span>
                            <span class="m-small">{{moment(data.date).format('ll')}}</span>
                        </div>
                    </div>
                    <div class="container-item-info expense">
                        <div class="m-container-value__item">
                            <span class="m-paragraph">
                                {{numeral(data.cost).format('$0,0')}}
                            </span>
                            <span class="m-small">{{numeral(data.percentil).format('0,0[0000]')}}%</span>
                        </div>
                    </div>
                    <div class="container-item-actions expense">
                        <div class="container-item-actions--column">
                            <font-awesome-icon icon="trash" @click="deleteItems(index)"/>
                        </div>
                        <div class="container-item-actions--column">
                            <font-awesome-icon icon="pen" @click="editItems(index, data)"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: "earning-list",
    computed: {
        ...mapState('common', {
            "earningData": (state) => (state.earningData)
        })
    },
    methods: {
        deleteItems(){

        },
        editItems(){
            
        }
    }
}
</script>