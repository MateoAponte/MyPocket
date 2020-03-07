<template>
    <div class="m-card" @click="emitSectionCategory(data)" v-if="container === 'progress'">
        <div class="m-card-header min-height">
            <div class="container-item__row vertical-center">
                <span class="m-title-big">
                    <div class="icons-category--medium flex-center">
                        <font-awesome-icon :icon="data.iconData.iconName"
                            :style="{ backgroundColor: data.iconData.class}" />
                        <span class="m-value-paragraph">{{data.iconData.category}}</span>
                    </div>
                </span>
                <span class="m-small">${{numeral(data.cost).format('0,0')}} COP</span>
            </div>
        </div>
        <div class="m-card-body">
            <div class="container-item__row minify-padding">
                <div class="indicator-container">
                    <div class="indicator--dynamic"
                        :style="{width: numeral(setPercent(data.cost)).format('0.0').concat('%'), backgroundColor: data.iconData.class }">
                        <span class="indicator--value m-label"
                            :style="{color: setColor(setPercent(data.cost))}">{{numeral(setPercent(data.cost)).format("0.0") }}%</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="m-card minify-padding" v-else>
        <div class="m-card-body">
            <div class="m-card__icon">
                <font-awesome-icon :icon="data.iconData.iconName"
                    :style="{ color: hex2rgba(data.iconData.class, 0.75)  }" />
            </div>
            <div class="m-card__content">
                <div class="m-card__content-info">
                    <div class="m-card__content-label">
                        <span class="m-label">
                            {{data.thing}}
                        </span>
                    </div>
                    <div class="m-card__content-label">
                        <span class="m-small">
                            {{moment(data.date).format('ll')}}
                        </span>
                    </div>
                </div>
                <div class="m-card__content-expense">
                    <span class="m-label">
                        {{numeral(data.cost).format("$0,0")}}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import numeral from 'numeral';

export default {
    name: "summaryCard",
    props: {
        container: {
            type: String,
            default: "progress"
        },
        data: {
            type: Object,
            default: () => {}
        },
        expense: {
            type: Number,
            default: 0
        }
    },
    methods: {
        setPercent(value){
            return (value * 100) / this.expense;
        },
        setColor(value){
            return numeral(value).format('0,0') <= 10 ? '#545454' : '#FAFAFA'
        },
        emitSectionCategory(array){
            this.$emit("upload", array);
        },
        hex2rgba(str, alpha) {
            var num = parseInt(str.slice(1), 16); // Convert to a number
            var arrRgb = [num >> 16 & 255, num >> 8 & 255, num & 255, num >> 24 & 255];
            return `rgba(${arrRgb[0]},${arrRgb[1]},${arrRgb[2]},${alpha})`;
        }
    },
}
</script>