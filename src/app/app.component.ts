import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api/menuitem';
import { TabMenuModule } from 'primeng/tabmenu'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TabMenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  items: MenuItem[] | undefined = [
    {
      label: 'New Events',
      routerLink: "/Events"
    }, {
      label: 'My Events',
      routerLink: "/MyEvents"
    }];
}