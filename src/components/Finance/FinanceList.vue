<template>
    <div class="m-card">
        <div class="m-card-header">
            <div class="m-container-item--row">
                <label class="m-title">
                    Lista
                </label>
                <button class="m-button m-button-azure">Mostrar Todos</button>
            </div>
        </div>
        <div class="m-card-body max-height-card relative">
            <div class="m-container-item--row minify-padding fixed">
                <div class="m-container-item--icon">
                    <span class="m-container-item--status__title">
                        Prioridad
                    </span>
                </div>
                <div class="m-container-item--info">
                    <div class="m-container-item--info--column">
                        <span class="m-container-item--info__item__title">
                            Información
                        </span>
                    </div>
                </div>
                <div class="m-container-item--status">
                    <span class="m-container-item--status__title">
                        Estado
                    </span>
                </div>
                <div class="m-container-item--value">
                    <span class="m-container-item--value__title">
                        Costo
                    </span>
                </div>
                <div class="m-container-item--actions">
                    <span class="m-container-item--actions__title">
                        Acciones
                    </span>
                </div>
            </div>
            <div class="m-container-item" v-for="(data, index) in reverseArrayData" :key="index">
                <div class="m-container-item--icon">
                    <div class="relative m-container-item--icon__item long-icon">
                        <span class="icons-category">
                            <font-awesome-icon :icon="data.iconData.name" :class="data.iconData.class"/>
                        </span>
                    </div>
                    <div class="relative m-container-item--icon__item">
                        <span class="m-paragraph item-overflow">{{data.iconData.category}}</span>
                        <span class="m-small">{{data.date}}</span>
                    </div>
                </div>
                <div class="m-container-item--info">
                    <div class="m-container-info__item">
                        <span class="m-container-item--info__item__title">
                            {{data.thing}}
                        </span>
                    </div>
                </div>
                <div class="m-container-item--status">
                    <div class="m-container-status__item">
                        <div class="m-container-item--status__value" :class="setColorPriority(data.priority)">
                            {{data.priority}}
                        </div>
                    </div>
                </div>
                <div class="m-container-item--value">
                    <div class="m-container-value__item">
                        <span class="m-container-item--value__title">
                            {{numeral(data.cost).format('$0,0')}}
                        </span>
                        <span class="m-small">({{numeral(setPercent(data.cost)).format("0,0")}}%)</span>
                    </div>
                </div>
                <div class="m-container-item--actions">
                    <div class="m-container-item--actions--column">
                        <font-awesome-icon icon="trash" />
                    </div>
                    <div class="m-container-item--actions--column">
                        <font-awesome-icon icon="check-circle" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
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
        setPercent(value){
            return (value * 100) / this.getBudgetData.budget;
        }
    }
}
</script>