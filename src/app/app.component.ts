import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'assets/icon/home.svg',
      direction: 'root'
    },
    {
      title: 'AR',
      url: '/augmented-reality',
      icon: 'assets/icon/ar.svg',
      direction: 'forward'
    },
    {
      title: 'Map',
      url: '/map',
      icon: 'assets/icon/map.svg',
      direction: 'root'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
