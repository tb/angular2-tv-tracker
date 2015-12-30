import {Component} from 'angular2/core';
import {RouteParams, OnActivate} from 'angular2/router';
import {COMMON_DIRECTIVES} from 'angular2/common';
import {Observable} from 'rxjs/Observable';
import {SortableHeader} from '../ui/sortableHeader';
import {TVMaze} from '../../providers/providers';
import {ToDate, OrderBy} from '../../pipes/pipes';
import {Show, Episode} from '../../interfaces/interfaces';

@Component({
  selector: 'episodes',
  template: `
    <h1>{{ (show | async)?.name }} episodes</h1>
    <table class="table">
      <thead>
        <tr>
          <th>
            <div sortableHeader="name" [sort]="sort">Name</div>
            <input class="col-md-6" (keyup)="filterBy('name',$event)">
          </th>
          <th sortableHeader="season" [sort]="sort">Season</th>
          <th sortableHeader="number" [sort]="sort">Number</th>
          <th sortableHeader="airstamp" [sort]="sort">Air date</th>
          <th>Runtime</th>
          <th>Summary</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="#episode of episodes | async | orderBy:sort.field:sort.desc">
          <td>{{ episode.name }}</td>
          <td>{{ episode.season }}</td>
          <td>{{ episode.number }}</td>
          <td>{{ episode.airstamp | toDate | date:'fullDate' }}</td>
          <td>{{ episode.runtime }}</td>
          <td [innerHtml]="episode.summary"></td>
        </tr>
      </tbody>
    </table>
  `,
  pipes: [ToDate, OrderBy],
  directives: [COMMON_DIRECTIVES, SortableHeader]
})
export class Episodes {

  public show: Observable<Show>;
  public episodes: Observable<Episode[]>;
  public sort: {field: string, desc: boolean} = {field: null, desc: false};
  public filter: Object = {};

  constructor(routeParams: RouteParams, tvMaze: TVMaze) {
    let id: number = +routeParams.get('id');
    this.show = tvMaze.getShow(id);
    this.episodes = tvMaze.getEpisodes(id);
  }

  filterBy(field: string, event: any) {
    let value = event.target.value;

    if (!value) {
      console.log('clear filter', field);
    } else {
      console.log('filterBy', field, value);
    }
  }
}