<template>
    <div class="chart-container"></div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export default {
    name: "semiPieChart",
    data: function() {
        return {
            chart: {}
        }
    },
    props: {
        data: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        destroy(){
            this.chart.dispose();
            this._init();
        },
        _init() {
            am4core.useTheme(am4themes_animated);

            this.chart = am4core.create(this.$el, am4charts.PieChart);
            this.chart.hiddenState.properties.opacity = 0;

            let data = _.cloneDeep(this.data);
            data.forEach( x => {
                if(x.value < 0){
                    x.value = x.value * -1;
                }
            });
            this.chart.data = data;

            this.chart.radius = am4core.percent(70);
            this.chart.innerRadius = am4core.percent(40);
            this.chart.startAngle = 180;
            this.chart.endAngle = 360;  

            var series = this.chart.series.push(new am4charts.PieSeries());
            series.dataFields.value = "value";
            series.dataFields.category = "type";

            series.slices.template.stroke = am4core.color("#fff");
            series.slices.template.strokeWidth = 2;
            series.slices.template.strokeOpacity = 1;

            series.slices.template.cornerRadius = 10;
            series.slices.template.innerCornerRadius = 7;
            series.slices.template.draggable = true;
            series.slices.template.inert = true;
            series.alignLabels = false;

            series.hiddenState.properties.startAngle = 90;
            series.hiddenState.properties.endAngle = 90;

            this.chart.legend = new am4charts.Legend();
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
    mounted() {
        am4core.useTheme(this.am4themes_myTheme);
        this._init();
    }
}
</script>