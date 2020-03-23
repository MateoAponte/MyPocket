<template>
    <div ></div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export default {
    name: "x-axis-chart",
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
    },
    methods: {
        destroy(){
            this.chart.dispose();
            this._init();
        },
        _init(){
            this.chart = am4core.create(this.$el, am4charts.XYChart);
            this.chart.data = this.data; 

            this.chart.dateFormatter.inputDateFormat = "MM-dd";

            // Create axes
            var dateAxis = this.chart.xAxes.push(new am4charts.DateAxis());
            dateAxis.renderer.minGridDistance = 50;
            var valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());

            var series = this.chart.series.push(new am4charts.LineSeries());
            series.dataFields.valueY = "value";
            series.dataFields.dateX = "date";
            series.tooltipText = "Item: {thing} \n Category: {category}"
            series.strokeWidth = 2;
            series.minBulletDistance = 15;

            // Drop-shaped tooltips
            series.tooltip.background.cornerRadius = 20;
            series.tooltip.background.strokeOpacity = 0;
            series.tooltip.pointerOrientation = "vertical";
            series.tooltip.label.minWidth = 40;
            series.tooltip.label.minHeight = 40;
            series.tooltip.label.textAlign = "middle";
            series.tooltip.label.textValign = "middle";

            // Make bullets grow on hover
            var bullet = series.bullets.push(new am4charts.CircleBullet());
            bullet.circle.strokeWidth = 2;
            bullet.circle.radius = 4;
            bullet.circle.fill = am4core.color("#fff");

            var bullethover = bullet.states.create("hover");
            bullethover.properties.scale = 1.3;

            // Make a panning cursor
            this.chart.cursor = new am4charts.XYCursor();
            this.chart.cursor.behavior = "panXY";
            this.chart.cursor.xAxis = dateAxis;
            this.chart.cursor.snapToSeries = series;

            // Create vertical scrollbar and place it before the value axis
            this.chart.scrollbarY = new am4core.Scrollbar();
            this.chart.scrollbarY.parent = this.chart.leftAxesContainer;

            // Create a horizontal scrollbar with previe and place it underneath the date axis
            this.chart.scrollbarX = new am4charts.XYChartScrollbar();
            this.chart.scrollbarX.series.push(series);
            this.chart.scrollbarX.parent = this.chart.bottomAxesContainer;
            
            
            function customizeGrip(grip) {
                // Remove default grip image
                grip.icon.disabled = true;
                
                // Disable background
                grip.background.disabled = true;
                
                // Add rotated rectangle as bi-di arrow
                    var img = grip.createChild(am4core.Rectangle);
                img.width = 15;
                img.height = 15;
                img.fill = am4core.color("#999");
                img.rotation = 45;
                img.align = "center";
                img.valign = "middle";
                
                // Add vertical bar
                var line = grip.createChild(am4core.Rectangle);
                line.height = 60;
                line.width = 3;
                line.fill = am4core.color("#999");
                line.align = "center";
                line.valign = "middle";
            }
            customizeGrip(this.chart.scrollbarX.startGrip);
            customizeGrip(this.chart.scrollbarX.endGrip);

            // dateAxis.start = 0.79;
            dateAxis.keepSelection = true;
        }
    },
    mounted(){
        this._init()
    }
}

</script>