import { Budget } from './../store/models/budget.model';
import { Store, select } from '@ngrx/store';
import { Module } from './../store/models/module.model';
import { Component, OnInit } from '@angular/core';
import { State } from '../store/models/app-state.model';

@Component({
  selector: 'app-module-insides',
  templateUrl: './module-insides.component.html',
  styleUrls: ['./module-insides.component.css']
})
export class ModuleInsidesComponent implements OnInit {

  budget$: Budget[];
  modules$: Module[];

  constructor(private store$: Store<State>) { }

  ngOnInit() {
    this.loadState();
  }

  deleteModule(id) {

  }

  getBudgetOfModule(id) {
    let amount = 0;
    this.budget$.forEach(budget => {
      if (budget.module == id) {
        // tslint:disable-next-line: radix
        amount += parseInt(budget.amount);
      }
    });
    return amount;
  }

  private loadState() {
    this.store$.pipe(select('module'))
      .subscribe(modules => {
        this.modules$ = modules.modules;
      });

    this.store$.pipe(select('budget'))
      .subscribe(budget => {
        this.budget$ = budget.budget;
      });
  }

}
