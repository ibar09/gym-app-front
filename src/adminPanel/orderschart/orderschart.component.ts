import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {OrdersMangementComponent} from "../orders-mangement/orders-mangement.component";

@Component({
  selector: 'app-orderschart',
  templateUrl: './orderschart.component.html',
  styleUrls: ['./orderschart.component.css']
})
export class OrderschartComponent {
  constructor(private router: Router) {}
  visitorsChartDrilldownHandler = () => {
      this.router.navigate(['adminPanel/ordersManagement']);
  };



  chartOptions = {
    title: {
      text: "Growth of Orders "
    },
    animationEnabled: true,
    axisX:{
      interval: 10,
      intervalType: "day",
      valueFormatString: "D MMM",
      labelFontColor: "rgb(0,75,141)",
      minimum: new Date(2012, 6, 10)
    },
    axisY: {
      title: "Number of Orders",
      interlacedColor: "#EBF2FA",
      tickColor: "azure",
      titleFontColor: "#4f81bc",
      valueFormatString: "#M,,."
    },
    data: [{
      click: this.visitorsChartDrilldownHandler,
      name: 'views',
      type: "area",
      markerSize: 8,
      dataPoints: [
        { x: new Date(2012, 6, 15), y: 0,  indexLabel: "Release", indexLabelFontColor: "orangered", markerColor: "orangered"},
        { x: new Date(2012, 6, 18), y: 3 },
        { x: new Date(2012, 6, 23), y: 12 },
        { x: new Date(2012, 7, 1), y: 21,},
        { x: new Date(2012, 7, 11), y: 30 },
        { x: new Date(2012, 7, 23), y: 32 },
        { x: new Date(2012, 7, 31), y: 33  },
        { x: new Date(2012, 8, 4), y: 55 },
        { x: new Date(2012, 8, 10), y: 60 },
        { x: new Date(2012, 8, 13), y: 90},
        { x: new Date(2012, 8, 16), y: 120},
        { x: new Date(2012, 8, 18), y: 200},
        { x: new Date(2012, 8, 21), y: 203},
        { x: new Date(2012, 8, 24), y: 208},
        { x: new Date(2012, 8, 26), y: 219},
        { x: new Date(2012, 8, 28), y: 298}
      ]
    }]
  }
}
