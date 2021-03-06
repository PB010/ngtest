import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component'
import { NavBarComponent } from './nav/nav-bar.component'
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventDetailsComponent } from './events/event-thumbnail/event-details/event-details.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./routes";
import { CreateEventComponent } from './events/create-event/create-event.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateSessionComponent } from './events/event-thumbnail/event-details/create-session/create-session.component';
import { SessionDetailsComponent } from './events/event-thumbnail/event-details/session-details/session-details.component';
import {CollapsibleWellComponent} from "./common/collapsible-well.component";
import {DurationPipe} from "./shared/duration.pipe";
import { SimpleModalComponent } from './common/simple-modal/simple-modal.component';
import {JQ_TOKEN} from "./common/jQuery.service";
import {ModalTriggerDirective} from "./common/simple-modal/modal-trigger.directive";
import { UpVoteComponent } from './events/event-thumbnail/event-details/session-details/upvote/up-vote.component';
import {ValidateLocationDirective} from "./shared/validators/validate-location.directive";

let jQuery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    NotFoundComponent,
    CreateSessionComponent,
    SessionDetailsComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpVoteComponent,
    ValidateLocationDirective
  ],
  providers: [
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    {provide: JQ_TOKEN, useValue: jQuery}
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')

  return true;
}
