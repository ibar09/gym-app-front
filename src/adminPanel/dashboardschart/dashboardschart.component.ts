import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboardschart',
  templateUrl: './dashboardschart.component.html',
  styleUrls: ['./dashboardschart.component.css']
})
export class DashboardschartComponent {

  chartOptions = {
    theme: "light1", // "light1", "ligh2", "dark1", "dark2"
    animationEnabled: true,
    title: {
      text: "IRON GYM Finance Report"
    },
    axisY: {
      title: "Amount (in TND)",
      prefix: "TND ",
      suffix: "K",
      lineThickness: 0,
      includeZero: true
    },
    data: [{
      type: "waterfall",
      yValueFormatString: "$#,##0K",
      dataPoints: [
        { label: "Sales",  y: 3273 },
        { label: "Service", y: 1623 },
        { label: "Total Revenue", isIntermediateSum: true},
        { label: "Research", y: -250 },
        { label: "Marketing",  y: -210 },
        { label: "Salaries", y: -432 },
        { label: "Operating Income", isCumulativeSum: true },
        { label: "Taxes",  y: -264 },
        { label: "Net Income",  isCumulativeSum: true }
      ]
    }]
  }


}
