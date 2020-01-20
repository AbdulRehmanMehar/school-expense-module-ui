import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user;
  constructor(private store: Store<{ user: User }>) {}

  ngOnInit() {
    this.store.pipe(select('user'))
      .subscribe(user => this.user = user);
  }
}
