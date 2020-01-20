import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChartComponent } from './chart/chart.component';
import { BudgetLogComponent } from './budget-log/budget-log.component';

import { BudgetIssuanceComponent } from './budget-issuance/budget-issuance.component';
import { ModuleInsidesComponent } from './module-insides/module-insides.component';
import { AddModuleComponent } from './add-module/add-module.component';

import { StoreModule } from '@ngrx/store';
import { userReducer } from './reducers/user.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChartComponent,
    BudgetLogComponent,
    BudgetIssuanceComponent,
    ModuleInsidesComponent,
    AddModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    StoreModule.forRoot({ user: userReducer })
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule {}
