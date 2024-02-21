import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api/menuitem';
import { TabMenuModule } from 'primeng/tabmenu'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TabMenuModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  items: MenuItem[] | undefined = [
    {
      label: 'New Events',
      routerLink: "Events"
    }, {
      label: 'My Events',
      routerLink: "MyEvents"
    }];
}
