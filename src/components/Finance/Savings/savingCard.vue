<template>
    <div class="m-card">
        <div class="m-card-body">
            <div class="m-container-column minify-padding">
                <div class="value-card">
                    <span class="m-title">{{data.thing}}</span>
                </div>
                <div class="value-card">
                    <span class="m-value-bolder">
                        Finaliza en {{moment(data.maxDate).format('ll')}}
                    </span>
                </div>
                <div class="value-card">
                    <span class="m-value-bolder">
                        Ahorro de: '{{data.from}}', Cuotas de: {{numeral(data.cost).format('$0,0')}}
                    </span>
                </div>
                <div class="progress-container">
                    <div class="progress-percent" :style="{ width: setWidth + '%'}"></div>
                    <span class="m-small progress-acum">{{numeral(acum).format('$0,0')}}</span>
                    <span class="m-small progress-limit">{{numeral(data.maxCost).format('$0,0')}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    name: "saving-card",
    data: function(){
        return {
            acum: 0
        }
    },
    props: {
        data: {
            type: Object,
            default: () => {}
        }
    },
    computed: {
        setWidth() {
            this.calcPercentByDate();
            return (this.acum * 100) / this.data.maxCost;
        },
    },
    methods: {
        calcPercentByDate() {
            this.acum = 0;
            let date1 = moment(this.data.date);
            let date2 = moment();
            if(date2.format('YYYY/MM/DD') !== this.data.maxDate){
                if(date1 <= date2){
                    let months = date2.diff(date1, 'months');
                    for(let i = 0; i <= months; i++){
                        this.acum += parseInt(this.data.cost);
                    }
                }
            } else {
                this.acum = this.data.maxCost;
            }
        }
    }
}
</script>