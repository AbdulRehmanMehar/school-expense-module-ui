import { of, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { User } from './../store/models/user.model';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { State } from '../store/models/app-state.model';

@Injectable({
  providedIn: 'root'
})
export class RouteGaurdService implements CanActivate {

  user$: User;

  constructor(private store$: Store<State>, private router$: Router) {
    this.store$.pipe(select('user'))
      .subscribe(user => {
        this.user$ = user;
      });
  }

  canActivate(): Observable<boolean> {
    if (this.user$.role !== 'principal') {
      this.router$.navigateByUrl('');
    }
    return of<boolean>(this.user$.role === 'principal');
  }
}
