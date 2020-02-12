import { RouteGaurdService } from './services/route-gaurd.service';
import { ModuleInsidesComponent } from './module-insides/module-insides.component';
import { AddModuleComponent } from './add-module/add-module.component';
import { BudgetIssuanceComponent } from './budget-issuance/budget-issuance.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BudgetLogComponent } from './budget-log/budget-log.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Home - School Expense Module'
    }
  },
  {
    path: 'budget-log',
    component: BudgetLogComponent,
    data: {
      title: 'View Issued Budget - School Expense Module'
    }
  },
  // {
  //   path: 'budget-insides',
  //   component: BudgetInsidesComponent,
  //   data: {
  //     title: 'View Budget Insides - School Expense Module'
  //   }
  // },
  {
    path: 'issue-budget',
    component: BudgetIssuanceComponent,
    data: {
      title: 'Issue Budget - School Expense Module'
    }
  },
  {
    path: 'add-module',
    canActivate: [RouteGaurdService],
    component: AddModuleComponent,
    data: {
      title: 'Create Sub Module - School Expense Module'
    }
  },
  {
    path: 'view-modules',
    canActivate: [RouteGaurdService],
    component: ModuleInsidesComponent,
    data: {
      title: 'View Sub Modules - School Expense Module'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
