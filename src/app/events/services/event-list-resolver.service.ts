import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {EventService} from "../shared/event.service";
import {map} from "rxjs/operators";

@Injectable({providedIn:'root'})

export class EventListResolverService implements Resolve<any> {
  constructor(private eventService: EventService){}

  resolve() {
    return this.eventService.getEvents().pipe(map(events => events));
  }

}
