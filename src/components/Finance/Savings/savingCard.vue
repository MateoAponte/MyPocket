<template>
    <div class="m-card">
        <div class="m-card-body">
            <div class="m-container-column minify-padding">
                <div>
                    <span class="m-title">{{data.thing}}</span>
                </div>
                <div>
                    <span class="m-value-bolder">
                    Finaliza en {{moment(data.maxDate).format('ll')}}
                    </span>
                </div>
                <div>
                    <span class="m-value-bolder">
                        Ahorro de {{data.from}}
                    </span>
                </div>
                <div class="progress-container">
                    <div class="progress-percent" :style="{ width: setWidth + '%'}"></div>
                    <span class="m-small progress-acum">{{numeral(data.quantity).format('$0,0')}}</span>
                    <span class="m-small progress-limit">{{numeral(data.cost).format('$0,0')}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "saving-card",
    props: {
        data: {
            type: Object,
            default: () => {}
        }
    },
    computed: {
        setWidth() {
            return (this.data.quantity * 100) / this.data.cost;
        }
    }
}
</script>