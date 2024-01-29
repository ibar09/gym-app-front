import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {AdminPanelDashboardComponent} from "../admin-panel-dashboard/admin-panel-dashboard.component";

export interface data {
  [key: string]: any;
}

@Component({
  selector: 'app-pychart',
  templateUrl: './pychart.component.html',
  styleUrls: ['./pychart.component.css']
})

export class PychartComponent implements data{
  chart: any;
  isButtonVisible = false;
  chartOptions: any;
  constructor(private router: Router) {}

  visitorsChartDrilldownHandler = (e: any) => {
    const clickedSegment = e.dataPoint.name;
    if (clickedSegment === "Users") {
      this.router.navigate(['adminPanel/UserManagement']);

    } else if (clickedSegment === "Coaches") {
      this.router.navigate(['adminPanel/CoachManagement']);

    }



  };

  visitorsDrilldownedChartOptions = {
    animationEnabled: true,
    theme: "light2",
    axisY: {
      gridThickness: 0,
      lineThickness: 1
    },
    data: []
  };

  newVSReturningVisitorsOptions = {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "Users vs Coaches"
    },
    subtitles: [{
      text: "Click on Any Segment to Drilldown",
      backgroundColor: "#2eacd1",
      fontSize: 16,
      fontColor: "white",
      padding: 5
    }],
    data: []
  };

  options: data = {
    "Users vs Coaches": [{
      type: "pie",
      name: "Users vs Coaches",
      startAngle: 90,
      cursor: "pointer",
      explodeOnClick: false,
      showInLegend: true,
      legendMarkerType: "square",
      click: this.visitorsChartDrilldownHandler,
      indexLabelPlacement: "inside",
      indexLabelFontColor: "white",
      dataPoints: [
        { y: 551160, name: "Users", color: "black", indexLabel: "86.56%" },
        { y: 329840, name: "Coaches", color: "red", indexLabel: "13.44%" }
      ]
    }],
    "Users": [{
      color: "black",
      name: "Users",
      type: "column",
      dataPoints: [
        { label: "Jan", y: 42600 },
        { label: "Feb", y: 44960 },
        { label: "Mar", y: 46160 },
        { label: "Apr", y: 48240 },
        { label: "May", y: 48200 },
        { label: "Jun", y: 49600 },
        { label: "Jul", y: 51560 },
        { label: "Aug", y: 49280 },
        { label: "Sep", y: 46800 },
        { label: "Oct", y: 57720 },
        { label: "Nov", y: 59840 },
        { label: "Dec", y: 54400 }
      ]
    }],
    "Coaches": [{
      color: "red",
      name: "coaches",
      type: "column",
      dataPoints: [
        { label: "Jan", y: 21800 },
        { label: "Feb", y: 25040 },
        { label: "Mar", y: 23840 },
        { label: "Apr", y: 24760 },
        { label: "May", y: 25800 },
        { label: "Jun", y: 26400 },
        { label: "Jul", y: 27440 },
        { label: "Aug", y: 29720 },
        { label: "Sep", y: 29200 },
        { label: "Oct", y: 31280 },
        { label: "Nov", y: 33160 },
        { label: "Dec", y: 31400 }
      ]
    }]
  };




  handleClick(event: Event) {
    this.chart.options = this.newVSReturningVisitorsOptions;
    this.chart.options.data = this.options["Users vs Coaches"];
    this.chart.render();
    this.isButtonVisible = true;
  }

  getChartInstance(chart: object) {
    this.chart = chart;
    this.chart.options = this.newVSReturningVisitorsOptions;
    this.chart.options.data = this.options["Users vs Coaches"];
    this.chart.render();
  }



}
