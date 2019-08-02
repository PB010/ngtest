import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastrService } from 'ngx-toastr';
import {ActivatedRoute} from "@angular/router";
import {IEventModel} from "./shared/ievent.model";

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events:IEventModel[];
  constructor(private eventService: EventService,
              private toastr: ToastrService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(eventName: string) {
    this.toastr.success(eventName);
  }
}
