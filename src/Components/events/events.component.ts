import { Component, HostListener } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { HttpServiceService } from '../../services/httpService/http-service.service';
import { IEvent, IEventReturn } from '../../interfaces/Event';
import { EMPTY, Observable, expand, map, reduce, shareReplay } from 'rxjs';
import { EventCardComponent } from "./event-card/event-card.component";
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-events',
    standalone: true,
    templateUrl: './events.component.html',
    styleUrl: './events.component.scss',
    imports: [ButtonModule, EventCardComponent, ScrollPanelModule, CommonModule]
})
  
  
export class EventsComponent {

  @HostListener('window:scroll', ['$event']) 
    LoadMore(event: any) {
    console.log('onScroll', event)
  }

  constructor(private httpService: HttpServiceService) { }

  url = 'https://www.skiddle.com/api/v1/events/search/?api_key=62dd299f31e4fd7c75b2a19c85d8defa&latitude=55.860916&longitude=-4.251433&radius=5&eventcode=LIVE&order=date&description=1'
  eventsReturn$: Observable<IEventReturn>;
  events$: Observable<IEvent[]>;
  events: IEvent[] | undefined

  GetEvents() {
    console.log('Get Events Pressed')
  
    this.eventsReturn$ = this.httpService.getRequest(this.url)
      .pipe(map(event => event), shareReplay())
    this.events$ = this.eventsReturn$
      .pipe(map(event => event.results), shareReplay() )
    
     this.events$
      .subscribe({
        next: e => {
          console.log(e)
          return e
      },
      error: error => console.log(error),
      complete: () => console.log('COMPLETE')
    }
    )
  } 

  GetAllEvents() {
    this.events$ = this.httpService.getRequest(this.url)
      .pipe(map((res: IEventReturn) => {
        return { ...res, index: 0 }
      }))
      .pipe(
        expand((res) => {
          const url = `${this.url}&offset=${((res.index + 1) * 20)}`
          return res.results.length > 0 ?
            this.httpService.getRequest(url)
              .pipe(map((ret: IEventReturn) => {
                return { ...ret, index: res.index + 1 }
              })) : EMPTY
        }),
        reduce((acc, current) => {
          console.log(  {...acc, results: [...acc.results, ...current.results]})
          return {...acc, results: [...acc.results, ...current.results]}
        }),
        map(res => {
          console.log(res.results)
          return res.results
        })
      )
    }
}
