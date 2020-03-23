<template>
    <div></div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export default {
    name: "xy-axis-chart",
    data: function(){
        return{
            chart: {},
            maxData: 0,
            minData: 0
        }
    },
    props: {
        data: {
            type: Array,
            default: () => {
                []
            }
        },
    },
    methods: {
        destroy(){
            this.chart.dispose();
            this._init();
        },
        assignValues(){
          if(this.data.length > 0){
            let changeData = _.cloneDeep(this.data);
            changeData.sort( (a,b) => {
                return a.cost - b.cost ;
            });
            this.minData = changeData[0].cost;
            this.maxData = changeData[changeData.length - 1].cost;
          }
        },
        _init(){
            am4core.useTheme(am4themes_animated);

            this.chart = am4core.create(this.$el, am4charts.XYChart);

            // Add data
            this.chart.data = this.data;
            this.assignValues();

            // Create axes
            var dateAxis = this.chart.xAxes.push(new am4charts.DateAxis());
            dateAxis.startLocation = 0.5;
            dateAxis.endLocation = 0.5;

            // Create value axis
            var valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());

            // Create series
            var series = this.chart.series.push(new am4charts.LineSeries());
            series.dataFields.valueY = "cost";
            series.dataFields.dateX = "date";
            series.strokeWidth = 3;
            series.tooltipText = `[bold]Item:[/] {thing} \n [bold]Categoría:[/] {iconData.category} \n [bold]Gastos:[/] {cost}`;
            series.fillOpacity = 0.1;

            // Create a range to change stroke for values below 0
            var range = valueAxis.createSeriesRange(series);
            range.value = 0;
            range.endValue = this.maxData;
            range.contents.stroke = "#26C196";
            range.contents.fill = range.contents.stroke;
            range.contents.strokeOpacity = 0.7;
            range.contents.fillOpacity = 0.1;

            var range2 = valueAxis.createSeriesRange(series);
            range2.value = 0;
            range2.endValue = this.minData;
            range2.contents.stroke = "#FB7185";
            range2.contents.fill = range2.contents.stroke;
            range2.contents.strokeOpacity = 0.7;
            range2.contents.fillOpacity = 0.1;

            var axisRange = valueAxis.axisRanges.create();
            axisRange.value = this.maxData * -1;
            axisRange.grid.stroke = am4core.color("#FB7185");
            axisRange.grid.strokeWidth = 2;
            axisRange.grid.strokeOpacity = 1;

            var circleBullet = series.bullets.push(new am4charts.CircleBullet());
            circleBullet.circle.stroke = am4core.color("#545454");
            circleBullet.circle.fill = am4core.color("#f5f5f5");
            circleBullet.circle.strokeWidth = .5;

            var valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.min = this.minData;   
            valueAxis.strictMinMax = true;

            // Add cursor
            this.chart.cursor = new am4charts.XYCursor();
            this.chart.cursor.xAxis = dateAxis;
            this.chart.scrollbarX = new am4core.Scrollbar();

            series.tooltip.getFillFromObject = false;
            series.tooltip.adapter.add("x", (x, target)=>{
                if(series.tooltip.tooltipDataItem.valueY < 0){
                    series.tooltip.background.fill = "#FB7185";
                }
                else{
                    series.tooltip.background.fill = "#26C196";
                }
                return x;
            })

        }
    },
    mounted(){
        this._init();
    }
}

</script>