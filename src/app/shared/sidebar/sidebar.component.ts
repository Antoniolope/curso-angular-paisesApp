import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
      li{
        cursor:pointer;
        user-select:none;
      }
    `
  ]
})
export class SidebarComponent {

}
