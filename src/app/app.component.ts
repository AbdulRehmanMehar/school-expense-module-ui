import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

interface User {
  name: string;
  role: string;
  image: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public user: User = {
    name: 'Accountant',
    role: 'accountant',
    image: 'accountant-avatar.jpeg'
  };

  public constructor(private titleService: Title, router: Router) {
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

  public handleUserChange() {
    if (this.user.role === 'accountant') {
      this.switchUserToPrincipal();
    } else {
      this.switchUserToAccountant();
    }
  }

  public switchUserToPrincipal() {
    this.user = {
      name: 'Principal',
      role: 'principal',
      image: 'principal-avatar.jpeg'
    }
  }
  public switchUserToAccountant() {
    this.user = {
      name: 'Accountant',
      role: 'accountant',
      image: 'accountant-avatar.jpeg'
    }
  }
}
