import { Routes } from '@angular/router';
import { EventsComponent } from '../Components/events/events.component';
import { MyEventsComponent } from '../Components/my-events/my-events.component';
import { LoginComponent } from '../Components/login/login.component';
import { HomeComponent } from '../Components/home/home.component';
import { canActivate } from '../services/routingGuard/can-activate-guard.service';

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
    canActivateChild: [canActivate],
    children: [
    {
      path: '',
      component: EventsComponent,
      // canActivate: [canActivate],
  },
      {
    path: 'Events',
    component: EventsComponent,
    // canActivate: [canActivate],
  },
  {
    path: 'MyEvents',
    component: MyEventsComponent,
    // canActivate: [canActivate],
  }
    ]
  }
  
];
