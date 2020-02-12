import { State } from './../store/models/app-state.model';
import { Store, select } from '@ngrx/store';
import { Budget } from './../store/models/budget.model';
import { Module } from './../store/models/module.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-log',
  templateUrl: './budget-log.component.html',
  styleUrls: ['./budget-log.component.css']
})
export class BudgetLogComponent implements OnInit {

  budget$: Budget[];
  modules$: Module[];

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.loadState();
  }

  getModuleName(id) {
    const mod = this.modules$.filter(mod => mod.id == id)[0];
    return mod == undefined ? '' : mod.name;
  }

  private loadState() {
    this.store.pipe(select('budget'))
    .subscribe(budget => {
      this.budget$ = budget.budget;
    });

    this.store.pipe(select('module'))
    .subscribe(modules => {
      this.modules$ = modules.modules;
    });
  }

}
