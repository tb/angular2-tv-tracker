import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {LocalStorage} from '../../providers/providers';
import {ShowList} from './showList';
import {Show} from '../../interfaces/interfaces';

@Component({
  selector: 'subscribed-shows',
  template: `
    <h1>Subscribed shows</h1>
    <show-list [shows]="subscribedShows" (unsubscribe)="unsubscribe($event)"></show-list>
    <div
      class="alert alert-warning"
      [hidden]="subscribedShows.length > 0">
      You haven't yet subscribed to any shows. <a [routerLink]="['/Search']">Add some now.</a>
    </div>
  `,
  directives: [ShowList, ROUTER_DIRECTIVES]
})
export class SubscribedShows {

  public subscribedShows: Show[];

  constructor(private localStorage: LocalStorage) {
    this.subscribedShows = localStorage.getItem('subscribedShows', []);
  }

  unsubscribe(show: Show): void {
    this.subscribedShows = this.subscribedShows.filter((subscribedShow: Show) => subscribedShow.id !== show.id);
  }

}