import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'qs-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.scss'],
})
export class MainComponent {

  routes: Object[] = [{
      title: 'Dashboard',
      route: '/',
      icon: 'dashboard',
    }, {
      title: 'Festivals',
      route: '/festivals',
      icon: 'music_video',
    }, {
      title: 'Genres',
      route: '/festivals',
      icon: 'queue_music',
    }, {
      title: 'Reviewers',
      route: '/users',
      icon: 'people',
    },
  ];

  constructor(private _router: Router) {}

  logout(): void {
    this._router.navigate(['/login']);
  }
}
