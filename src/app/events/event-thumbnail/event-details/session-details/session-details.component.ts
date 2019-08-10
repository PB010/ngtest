import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ISession} from "../../../../shared/models/events/ievent.model";

@Component({
  selector: 'app-session-details',
  templateUrl: './session-details.component.html',
  styleUrls: ['./session-details.component.css']
})
export class SessionDetailsComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleSessions: ISession[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    if(this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name'
        ? this.visibleSessions.sort(this.sortByNameAsc)
        : this.visibleSessions.sort(this.sortByVotesDesc);
    }
  }

  filterSessions(filter: string): void {
    if(filter === 'all')  {
      this.visibleSessions = this.sessions.slice(0);
    } else {
        this.visibleSessions = this.sessions.filter(
          session => session.level.toLocaleLowerCase() === filter);
    }
  }

  sortByNameAsc(firstSession: ISession, secondSession: ISession): number {
    if (firstSession.name > secondSession.name) return 1
    else if (firstSession.name = secondSession.name) return 0
    else return -1
  }

  sortByVotesDesc(firstSession: ISession, secondSession: ISession): number {
    return secondSession.voters.length - firstSession.voters.length;
  }
}
