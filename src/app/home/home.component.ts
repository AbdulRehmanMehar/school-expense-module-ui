import { State } from './../store/models/app-state.model';
import { Component, OnInit } from '@angular/core';
import { User } from '../store/models/user.model';
import { Store, select } from '@ngrx/store';
import { Budget } from '../store/models/budget.model';
import { Module } from '../store/models/module.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user;
  public budget$: Budget[];
  public modules$: Module[];


  constructor(private store$: Store<State>) {}

  ngOnInit() {
    this.loadState();
  }

  private loadState() {
    this.store$.pipe(select('user'))
      .subscribe(user => this.user = user);

    this.store$.pipe(select('module'))
    .subscribe(mod => {
      this.modules$ = mod.modules;
    });

    this.store$.pipe(select('budget'))
    .subscribe(budget => {
      this.budget$ = budget.budget;
    });



  }

  getTotalBudget() {
    let amount = 0;
    this.budget$.forEach(budget => {
      // tslint:disable-next-line: radix
      amount += parseInt(budget.amount);
    });
    return amount;
  }
}
