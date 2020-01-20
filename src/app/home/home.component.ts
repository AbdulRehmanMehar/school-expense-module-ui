import { AppComponent } from './../app.component';
import { ChartComponent } from './../chart/chart.component';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user;
  constructor(appComponent: AppComponent) {
    this.user = appComponent.user;
  }

  ngOnInit() {
  }

}
