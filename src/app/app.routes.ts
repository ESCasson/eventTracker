import { Routes } from '@angular/router';
import { EventsComponent } from '../Components/events/events.component';
import { MyEventsComponent } from '../Components/my-events/my-events.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/Events',
    pathMatch: 'full'
  },
  {
    path: 'Events',
    component: EventsComponent
  },
  {
    path: 'MyEvents',
    component: MyEventsComponent
  }
];
