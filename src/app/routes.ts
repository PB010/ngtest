import {EventsListComponent} from "./events/events-list.component";
import {EventDetailsComponent} from "./events/event-details/event-details.component";
import {Routes} from "@angular/router";
import {CreateEventComponent} from "./events/create-event/create-event.component";
import {NotFoundComponent} from "./errors/not-found/not-found.component";
import {EventRouteActivatorService} from "./events/services/event-route-activator.service";
import {EventListResolverService} from "./events/services/event-list-resolver.service";

export const appRoutes: Routes = [
  {path: 'events', component: EventsListComponent,
    resolve: {events: EventListResolverService}},
  {path: 'events/new', component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent']},
  {path: 'events/:id', component: EventDetailsComponent,
    canActivate: [EventRouteActivatorService]},
  {path: '404', component: NotFoundComponent},
  {path: '', redirectTo: '/events', pathMatch: 'full'},
  {path: 'user', loadChildren: './user/user.module#UserModule'}
];
