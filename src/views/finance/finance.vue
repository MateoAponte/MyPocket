<template>
    <div class="m-general-container">
        <div class="m-head-container">
            <div class="m-head-container-card">
                <div class="m-container-item--column">
                    <label class="m-label">
                        En que:
                    </label>
                    <input type="password" class="custom-form">
                </div>
                <div class="m-container-item--column">
                    <label class="m-label">
                        Cuanto:
                    </label>
                    <input type="password" class="custom-form">
                </div>
                <div class="m-container-item--column">
                    <label class="m-label">
                        Prioridad:
                    </label>
                    <input type="password" class="custom-form">
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
                                <div class="m-container-item">
                                    <div class="m-container-item--status">
                                        <span class="m-container-item--status--lower">
                                            .
                                        </span>
                                    </div>
                                    <div class="m-container-item--info">
                                        <div class="m-container-item--info--column">
                                            <div class="m-container-item--info__item">
                                                <span class="m-container-item--info__item__title">
                                                    Universidad
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
                                                {{numeral('250000').format('$0,0')}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="m-container-item">
                                    <div class="m-container-item--status">
                                        <span class="m-container-item--status--lower">
                                            .
                                        </span>
                                    </div>
                                    <div class="m-container-item--info">
                                        <div class="m-container-item--info--column">
                                            <div class="m-container-item--info__item">
                                                <span class="m-container-item--info__item__title">
                                                    Universidad
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
                                                {{numeral('250000').format('$0,0')}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="m-container-item">
                                    <div class="m-container-item--status">
                                        <span class="m-container-item--status--medium">
                                            .
                                        </span>
                                    </div>
                                    <div class="m-container-item--info">
                                        <div class="m-container-item--info--column">
                                            <div class="m-container-item--info__item">
                                                <span class="m-container-item--info__item__title">
                                                    Universidad
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
                                                {{numeral('250000').format('$0,0')}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="m-container-item">
                                    <div class="m-container-item--status">
                                        <span class="m-container-item--status--hight">
                                            .
                                        </span>
                                    </div>
                                    <div class="m-container-item--info">
                                        <div class="m-container-item--info--column">
                                            <div class="m-container-item--info__item">
                                                <span class="m-container-item--info__item__title">
                                                    Universidad
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
                                                {{numeral('250000').format('$0,0')}}
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
                                        {{numeral('1900000').format('$0,0')}}
                                    </label>
                                </div>
                                <div class="m-container-item--row">
                                    <label class="m-title">
                                        Información:
                                    </label>
                                    <label class="m-title">
                                        {{numeral('1900000').format('$0,0')}}
                                    </label>
                                </div>
                                <div class="m-container-item--row">
                                    <label class="m-title">
                                        Información:
                                    </label>
                                    <label class="m-title">
                                        {{numeral('1900000').format('$0,0')}}
                                    </label>
                                </div>
                                <div class="m-container-item--row">
                                    <label class="m-title">
                                        Información:
                                    </label>
                                    <label class="m-title">
                                        {{numeral('1900000').format('$0,0')}}
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
    
}
</script>