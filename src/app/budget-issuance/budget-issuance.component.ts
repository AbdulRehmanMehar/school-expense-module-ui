import { IssueBudgetAction } from './../store/actions/budget.actions';
import { Module } from './../store/models/module.model';
import { State } from './../store/models/app-state.model';
import { Store, select } from '@ngrx/store';
import { User } from './../store/models/user.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { NotifierService } from 'angular-notifier';


@Component({
  selector: 'app-budget-issuance',
  templateUrl: './budget-issuance.component.html',
  styleUrls: ['./budget-issuance.component.css']
})
export class BudgetIssuanceComponent implements OnInit {
  user$: User;
  modules$: Module[];
  form$: FormGroup;

  constructor(private store$: Store<State>, private notifier$: NotifierService) { }

  ngOnInit() {
    this.loadState();
    this.initializeForm();
  }

  submit() {
    this.store$.dispatch(new IssueBudgetAction(this.form$.value));
    this.store$.pipe(select('budget'))
      .subscribe(budget => {
        if (budget.error) {
          this.notifier$.notify('error', budget.error);
        } else {
          this.form$.reset();
          this.notifier$.notify('success', 'Budget was Issued.');
        }
      });
    this.form$.reset();
  }

  private initializeForm() {
    this.form$ = new FormGroup({
      title: new FormControl('', [
        Validators.required,
      ]),
      amount: new FormControl('', [
        Validators.required
      ]),
      module: new FormControl('', [
        Validators.required
      ]),
      description: new FormControl('', [
        Validators.required
      ]),
      issued_by: new FormControl(this.user$.name),
      date: new FormControl(new Date().toISOString())
    });

  }

  private loadState() {
    this.store$.pipe(select('user'))
      .subscribe(user => {
        this.user$ = user;
      });

    this.store$.pipe(select('module'))
      .subscribe(module$ => {
        this.modules$ = module$.modules;
      });
  }

}
