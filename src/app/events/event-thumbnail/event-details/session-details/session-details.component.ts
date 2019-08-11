import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ISession} from "../../../../shared/models/events/ievent.model";
import {AuthService} from "../../../../user/auth.service";
import {VoterService} from "../../../../shared/voter.service";

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

  constructor(private authService: AuthService,
              private voterService: VoterService) { }

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

  toggleVote(session: ISession): void {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(session, this.authService.currentUser.userName)
    } else {
        this.voterService.addVoter(session, this.authService.currentUser.userName);
    }

    if (this.sortBy === 'votes') {
      this.visibleSessions.sort(this.sortByVotesDesc);
    }
  }

  userHasVoted(session: ISession): boolean {
    return this.voterService.userHasVoted(session,
      this.authService.currentUser.userName);
  }
}
