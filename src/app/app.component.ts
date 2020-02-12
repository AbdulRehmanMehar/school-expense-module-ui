import { BudgetRecordAction } from './store/actions/budget.actions';
import { LoadModuleAction } from './store/actions/module.actions';
import { State } from './store/models/app-state.model';
import { Component, OnInit } from '@angular/core';
import { User } from './store/models/user.model';
import { Store, select } from '@ngrx/store';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { changeUserToAccountant, changeUserToPrincipal } from './store/actions/user.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public user: User;

  public constructor(
    private store: Store<State>,
    private titleService: Title,
    router: Router
  ) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let title = this.getTitle(
          router.routerState,
          router.routerState.root
        ).join('-');
        titleService.setTitle(title);
      }
    });
  }

  getTitle(state, parent) {
    let data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(...this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }

  handleUserChange() {
    if (this.user.role === 'principal') {
      this.store.dispatch(changeUserToAccountant());
    } else {
      this.store.dispatch(changeUserToPrincipal());
    }
  }

  ngOnInit() {
    this.store.pipe(select('user'))
      .subscribe(user => {
        this.user = user;
      });

    this.store.dispatch(new LoadModuleAction());
    this.store.dispatch(new BudgetRecordAction());
  }


}
