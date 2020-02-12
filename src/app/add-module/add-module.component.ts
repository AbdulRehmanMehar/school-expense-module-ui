import { NotifierService } from 'angular-notifier';
import { AddModuleAction } from './../store/actions/module.actions';
import { Module } from './../store/models/module.model';
import { Store, select } from '@ngrx/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { State } from '../store/models/app-state.model';

@Component({
  selector: 'app-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.css']
})
export class AddModuleComponent implements OnInit {

  form$: FormGroup;
  modules$: Module[];
  moduleError: string;

  constructor(private store$: Store<State>, private notifier$: NotifierService) { }

  ngOnInit() {
    this.loadState();
    this.initializeForm();
  }

  submit() {
    // const idx = this.modules$.indexOf(module$ => module$.name == this.form$.get('name').value);
    const el = this.modules$.filter(module$ => module$.name == this.form$.get('name').value)[0];
    if (el === null || el === undefined) {
      this.store$.dispatch(new AddModuleAction(this.form$.value));
      this.store$.pipe(select('module'))
        .subscribe(modules => {
          if (modules.error) {
            this.notifier$.notify('error', modules.error);
          } else {
            this.form$.reset();
            this.notifier$.notify('success', 'Module was added.');
          }
        });
    } else {
      this.notifier$.notify('error', 'Module already exists.');
    }
  }

  private initializeForm() {
    this.form$ = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ])
    });
  }

  private loadState() {
    this.store$.pipe(select('module'))
      .subscribe(modules => {
        this.modules$ = modules.modules;
      });
  }



}
