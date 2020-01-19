import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ChartComponent],
  imports: [BrowserModule, AppRoutingModule, ChartsModule],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule {}
