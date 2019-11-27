<template>
    <div class="m-general-container">
        <div class="m-head-container">
            <div class="m-head-container-card">
                <div class="m-container-item--row">
                    <div class="m-container-item--column">
                        <label class="m-label">
                            En que:
                        </label>
                        <input type="text" class="custom-form">
                    </div>
                    <div class="m-container-item--column">
                        <label class="m-label">
                            Cuando:
                        </label>
                        <input type="text" class="custom-form">
                    </div>
                </div>
                <div class="m-container-item--row">
                    <div class="m-container-item--column--medium">
                        <label class="m-label">
                            Prioridad:
                        </label>
                    </div>
                    <div class="m-container-item--column">
                        <input type="text" class="custom-form">
                    </div>
                </div>
                <div class="m-container-item--row">
                    <button class="m-button m-button-turquese">Guardar</button>
                    <button class="m-button m-button-orange">Agregar</button>
                </div>
            </div>
        </div>

        <div class="m-container">
            <div class="m-container-row">
                <div class="m-container-row m-container-anormal">
                    <div class="m-container-column">
                        <div class="m-card">
                            <div class="m-card-header">
                                <div class="m-container-item--row">
                                    <label class="m-title">
                                        Lista:
                                    </label>
                                    <button class="m-button m-button-orange">Mostrar Todos</button>
                                </div>
                            </div>
                            <div class="m-card-body">
                                <div class="m-container-item" v-for="data in userData" :key="data">
                                    <div class="m-container-item--status">
                                        <span class="m-container-item--status--lower">
                                            .
                                        </span>
                                    </div>
                                    <div class="m-container-item--info">
                                        <div class="m-container-item--info--column">
                                            <div class="m-container-item--info__item">
                                                <span class="m-container-item--info__item__title">
                                                    {{data.thing}}
                                                </span>
                                                <span class="m-container-item--info__item__value">
                                                    {{moment().format('YYYY/MM/DD')}}
                                                </span>
                                            </div>
                                        </div>
                                        <div class="m-container-item--info--column">
                                            <div class="m-container-item--info__item centered-content">
                                                <span class="m-container-item--info__item__title">
                                                    {{numeral('75.156').format('0.00')}}%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="m-container-item--value">
                                        <div class="m-container-item--value--row">
                                            <span class="m-container-item--value__title">
                                                {{numeral(data.cost).format('$0,0')}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="m-container-column">
                        <div class="m-card">
                            <div class="m-card-header">
                                <div class="m-container-item--row">
                                    <label class="m-title">
                                        Información
                                    </label>
                                </div>
                            </div>
                            <div class="m-card-body space-around">
                                <div class="m-container-item--row">
                                    <label class="m-title">
                                        Información:
                                    </label>
                                    <label class="m-title">
                                        {{numeral('1000').format('$0,0')}}
                                    </label>
                                </div>
                                <div class="m-container-item--row">
                                    <label class="m-title">
                                        Información:
                                    </label>
                                    <label class="m-title">
                                        {{numeral('1000').format('$0,0')}}
                                    </label>
                                </div>
                                <div class="m-container-item--row">
                                    <label class="m-title">
                                        Información:
                                    </label>
                                    <label class="m-title">
                                        {{numeral('1000').format('$0,0')}}
                                    </label>
                                </div>
                                <div class="m-container-item--row">
                                    <label class="m-title">
                                        Información:
                                    </label>
                                    <label class="m-title">
                                        {{numeral('1000').format('$0,0')}}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            userData: [
                {
                    "thing": "Prueba",
                    "cost": "500000",
                    "priority": "Alta"
                }, {
                    "thing": "Prueba",
                    "cost": "250000",
                    "priority": "Alta"
                }, {
                    "thing": "Prueba",
                    "cost": "167000",
                    "priority": "Alta"
                }, {
                    "thing": "Prueba",
                    "cost": "100000",
                    "priority": "Media"
                }, {
                    "thing": "Prueba",
                    "cost": "80000",
                    "priority": "Media"
                }, {
                    "thing": "Prueba",
                    "cost": "300000",
                    "priority": "Alta"
                }, {
                    "thing": "Prueba",
                    "cost": "150000",
                    "priority": "Alta"
                }, {
                    "thing": "Prueba",
                    "cost": "50000",
                    "priority": "Baja"
                }, {
                    "thing": "Prueba",
                    "cost": "80000",
                    "priority": "Media"
                }
            ]
        }
    }
}
</script>