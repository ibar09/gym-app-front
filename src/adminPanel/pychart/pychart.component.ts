import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {AdminPanelDashboardComponent} from "../admin-panel-dashboard/admin-panel-dashboard.component";
import {ProductService} from "../../app/marketplace/services/product.service";
import {UserService} from "../../app/user/services/user.service";

export interface data {
  [key: string]: any;
}

@Component({
  selector: 'app-pychart',
  templateUrl: './pychart.component.html',
  styleUrls: ['./pychart.component.css']
})

export class PychartComponent implements OnInit,data{
  chart: any;
  isButtonVisible = false;
  chartOptions: any;

  nb_users:number=5;
  row_coaches :any[]=[];

  constructor(private router: Router,private userService:UserService) {

  }
ngOnInit() {
  this.userService.getUsers({page: 1, limit: 1000}).subscribe(
      (result) => {
        this.nb_users=result.items.length;
        console.log(this.nb_users)


      });
  }

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
        {y: this.nb_users, name: "Users", color: "black", indexLabel: "86.56%"},
        {y: 8, name: "Coaches", color: "red", indexLabel: "13.44%"}
      ]
    }],
  }





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
