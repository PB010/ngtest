import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ISession} from "../../../../../shared/models/events/ievent.model";

@Component({
  selector: 'app-up-vote',
  templateUrl: './up-vote.component.html',
  styleUrls: ['./up-vote.component.css']
})
export class UpVoteComponent implements OnInit {
  @Output() vote = new EventEmitter<any>();
  @Input() count: number;
  @Input() voted: boolean;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.vote.emit({})
  }

}
