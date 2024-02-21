import { Routes } from '@angular/router';
import { EventsComponent } from '../Components/events/events.component';
import { MyEventsComponent } from '../Components/my-events/my-events.component';
import { LoginComponent } from '../Components/login/login.component';
import { HomeComponent } from '../Components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/Login',
    pathMatch: 'full'
  },
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'Home',
    component: HomeComponent,
    children: [
    {
    path: '',
    component: EventsComponent
  },
      {
    path: 'Events',
    component: EventsComponent
  },
  {
    path: 'MyEvents',
    component: MyEventsComponent
  }
    ]
  }
  
];
