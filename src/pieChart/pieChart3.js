import React, {Component} from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_kelly);
am4core.useTheme(am4themes_animated);

let chart = am4core.create("chartdiv3", am4charts.PieChart);
chart.startAngle = 160;
chart.endAngle = 380;

chart.innerRadius = am4core.percent(55);

chart.data = [{
    "country": "Android Development",
    "litres": 50,
}, {
    "country": "Backend Development",
    "litres": 300,
}, {
    "country": "Frontend Development",
    "litres": 200,
}, {
    "country": "IOS Development",
    "litres": 50,
}];

// Add second series
let pieSeries2 = chart.series.push(new am4charts.PieSeries());
pieSeries2.dataFields.value = "litres";
pieSeries2.dataFields.category = "country";
pieSeries2.slices.template.stroke = new am4core.InterfaceColorSet().getFor("background");
pieSeries2.slices.template.strokeWidth = 1;
pieSeries2.slices.template.strokeOpacity = 1;
pieSeries2.slices.template.states.getKey("hover").properties.shiftRadius = 0.05 ;
pieSeries2.slices.template.states.getKey("hover").properties.scale = 1;

pieSeries2.labels.template.disabled = true;
pieSeries2.ticks.template.disabled = true;


let label = chart.seriesContainer.createChild(am4core.Label);
label.textAlign = "middle";
label.horizontalCenter = "middle";
label.verticalCenter = "middle";
label.adapter.add("text", function(text, target){
    return "[bold font-size:30px]"+pieSeries2.dataItem.values.value.sum + "\n[/][font-size:12px]Umumiy userlar soni[/]:";
})

class PieChart3 extends Component {
    render() {
        return (
            <div>
                <div id="chartdiv3">
                </div>
            </div>
        );
    }
}

export default PieChart3;