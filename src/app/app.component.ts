import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  activeRoute: string;

  onNavigate(route: string) {
    this.activeRoute = route;
  }

  ngOnInit() {
    this.activeRoute = 'recipes';
  }
}
