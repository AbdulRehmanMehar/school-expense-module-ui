import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  constructor() {}
  public chartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
      labels: {
        fontColor: '#C5C5D1'
      }
    },
    scales: {
        xAxes: [{
          ticks: { fontColor: '#C5C5D1' },
          gridLines: { color: 'rgba(255,255,255,0.05)' }
        }],
        yAxes: [{
          ticks: { fontColor: '#C5C5D1' },
          gridLines: { color: 'rgba(255,255,255,0.05)' }
        }]
      }
  };
  public chartLabels = [
    '1000000',
    '500000',
    '100000',
    '50000'
  ];
  public chartType = 'line';
  public chartLegend = true;
  public chartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Maintenance Module' , backgroundColor: 'transparent'},
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Salary Module', backgroundColor: 'transparent'}
  ];
  ngOnInit() {}
}
