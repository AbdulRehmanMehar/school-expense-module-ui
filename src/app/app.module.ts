import { ModuleEffects } from './store/effects/module.effects';
import { BudgetEffects } from './store/effects/budget.effects';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NotifierModule } from 'angular-notifier';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChartComponent } from './chart/chart.component';
import { BudgetLogComponent } from './budget-log/budget-log.component';

import { BudgetIssuanceComponent } from './budget-issuance/budget-issuance.component';
import { ModuleInsidesComponent } from './module-insides/module-insides.component';
import { AddModuleComponent } from './add-module/add-module.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment.prod';

import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/reducers/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BudgetReducer } from './store/reducers/budget.reducer';
import { ModuleReducer } from './store/reducers/module.reducer';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

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
    EffectsModule.forRoot([BudgetEffects, ModuleEffects]),
    StoreModule.forRoot({ user: userReducer, budget: BudgetReducer, module: ModuleReducer }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    NotifierModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule {}
