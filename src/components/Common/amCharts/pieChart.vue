<template>
    <div class="chart-container"></div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export default {
    name: "pie-chart",
    data: function(){
        return{
            chart: {}
        }
    },
    props: {
        data: {
            type: Array,
            default: () => {
                []
            }
        },
        type: {
            type: String,
            default: "chart"
        },
        label: {
            type: String,
            default: ""
        },
        radius: {
            type: Number,
            default: 80
        },
        fontSize: {
            type: Number,
            default: 20
        }
    },
    watch: {
        data(newVal){
            if(this.type === "watcher"){
                this.destroy();
            }
        }
    },
    methods: {
        destroy(){
            this.chart.dispose();
            this._init();
        },
        _init(){
            this.chart = am4core.create(this.$el, am4charts.PieChart);

            this.chart.data = this.data;
            
            this.chart.innerRadius = this.radius;
            this.chart.fontFamily = "Questrial";
            let label = this.chart.seriesContainer.createChild(am4core.Label);
            label.text = this.label;
            label.horizontalCenter = "middle";
            label.verticalCenter = "middle";
            label.fontSize = this.fontSize;


            let pieSeries = this.chart.series.push(new am4charts.PieSeries());
            pieSeries.dataFields.value = "cost";
            pieSeries.dataFields.category = "category";

            pieSeries.slices.template.stroke = am4core.color("#fff");
            pieSeries.slices.template.strokeWidth = 2;
            pieSeries.slices.template.strokeOpacity = 1;

            // let loop = () => {
            // //chart.allLabels[0].text = currentYear;
            //     for(var i = 0; i < this.data.length; i++) {
            //         this.chart.data[i].size = this.data[i].size;
            //     }
            //     this.chart.invalidateRawData();
            //     this.chart.setTimeout( loop, 4000 );
            // }

            // loop();

        },
        am4themes_myTheme(target) {
            if (target instanceof am4core.ColorSet) {
                target.list = [
                    am4core.color("#739AFF"),
                    am4core.color("#26C196"),
                ];
            }
        }
    },
    mounted(){
        am4core.useTheme(am4themes_animated);
        am4core.useTheme(this.am4themes_myTheme);
        this._init();
    }
}
</script>