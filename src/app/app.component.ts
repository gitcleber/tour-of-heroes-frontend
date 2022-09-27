import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tour-of-heroes-frontend';

  isAuthenticated: boolean = false;

  logout() {
    this.isAuthenticated = false;
  }
  login() {
    this.isAuthenticated = true;
  }
}
