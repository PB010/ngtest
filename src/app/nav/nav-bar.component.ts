import { Component } from '@angular/core'
import {AuthService} from "../user/auth.service";
import {ISession} from "../shared/models/events/ievent.model";
import {EventService} from "../shared/event.service";
import {Observable} from "rxjs";

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  searchTerm: string = '';
  foundSessions: [];

  constructor(private authService: AuthService,
              private eventService: EventService) {}

  searchSessions(searchTerm: string): Observable<ISession[]> {
    return this.eventService.searchSessions(searchTerm)
      .subscribe(sessions => {
        this.foundSessions = sessions;
      });

  }
}
