<template>
    <div class="m-card">
        <div class="m-card-header">
            <div class="container-item__row">
                <label class="m-title">
                    Lista
                </label>
                <button class="m-button m-button-azure" @click="allSummary()">Mostrar Todos</button>
            </div>
        </div>
        <div class="m-card-body max-height-card relative">
            <div class="container-item__row minify-padding fixed">
                <div class="container-item__icon">
                    <span class="container-item-status__title">
                        Prioridad
                    </span>
                </div>
                <div class="container-item-info">
                    <div class="container-item-info--column">
                        <span class="container-item-info__item__title">
                            Información
                        </span>
                    </div>
                </div>
                <div class="container-item-status">
                    <span class="container-item-status__title">
                        Estado
                    </span>
                </div>
                <div class="container-item-value">
                    <span class="container-item-value__title">
                        Costo
                    </span>
                </div>
                <div class="container-item-actions">
                    <span class="container-item-actions__title">
                        Acciones
                    </span>
                </div>
            </div>
            <transition-group name="table" tag="div" class="table-body">
                <div class="container-item" v-for="(data, index) in getItemsData" :key="data">
                    <div class="container-item__icon">
                        <div class="relative container-item__icon__item long-icon">
                            <span class="icons-category">
                                <font-awesome-icon :icon="data.iconData.name" :class="data.iconData.class"/>
                            </span>
                        </div>
                        <div class="relative container-item__icon__item">
                            <span class="m-paragraph item-overflow">{{data.iconData.category}}</span>
                            <span class="m-small">{{moment(data.date).format('ll')}}</span>
                        </div>
                    </div>
                    <div class="container-item-info">
                        <div class="m-container-info__item">
                            <span class="m-paragraph">
                                {{data.thing}}
                            </span>
                        </div>
                    </div>
                    <div class="container-item-status">
                        <div class="m-container-status__item">
                            <div class="container-item-status__value" :class="setColorPriority(data.priority)">
                                {{data.priority}}
                            </div>
                        </div>
                    </div>
                    <div class="container-item-value">
                        <div class="m-container-value__item">
                            <span class="m-paragraph">
                                {{numeral(data.cost).format('$0,0')}}
                            </span>
                            <span class="m-small">({{numeral(setPercent(data.cost)).format("0.00")}}%)</span>
                        </div>
                    </div>
                    <div class="container-item-actions">
                        <div class="container-item-actions--column">
                            <font-awesome-icon icon="trash" @click="deleteItemsData(index)"/>
                        </div>
                        <div class="container-item-actions--column">
                            <font-awesome-icon icon="check-circle" @click="checkItem(index)"/>
                        </div>
                    </div>
                </div>
            </transition-group>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
export default {
    name: 'FinanceList',
    computed: {
        ...mapGetters('finance', [
            'getItemsData',
            'getBudgetData'
        ]),
        reverseArrayData(){
            return this.getItemsData.reverse();
        }
    },
    methods: {
        ...mapActions('common', [
            'updateModalData',
        ]),
        ...mapActions('finance', [
            'updateItemsData',
            'deleteItemsData'
        ]),
        setColorPriority(value) {
            switch (value){
                case 'Alta':
                    return 'priority-high';
                break;
                case 'Media':
                    return 'priority-medium';
                break;
                case 'Baja':
                    return 'priority-lower';
                break;
            }
        },
        allSummary(){
            this.updateModalData({
                type: "filter",
                title: "Filtro por: "
            });
            document.querySelector(".overlay").classList.replace('hide', 'show');
        },
        setPercent(value){
            return (value * 100) / this.getBudgetData.budget;
        }
    }
}
</script>