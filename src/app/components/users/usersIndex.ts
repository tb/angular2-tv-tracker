import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {ToDate, OrderBy} from '../../pipes/pipes';
import {SortableHeader} from '../ui/sortableHeader';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'users-index',
  directives: [SortableHeader],
  pipes: [ToDate, OrderBy],
  template: `
    <h1>Users</h1>
    <table class='table' [hidden]='!users || users.length === 0'>
      <thead>
        <tr>
          <th sortableHeader="first_name" [sort]="sort">First Name</th>
          <th sortableHeader="last_name" [sort]="sort">Last Name</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="#user of users | orderBy:sort.field:sort.desc">
          <td>{{ user.first_name }}</td>
          <td>{{ user.last_name }}</td>
        </tr>
      </tbody>
    </table>
  `
})
export class UsersIndex {
  public users: Array<any>;
  public sort: {field: string, desc: boolean};

  constructor() {
    this.users = [
      {
        first_name: 'Mark',
        last_name: 'Hicks'
      },
      {
        first_name: 'Russell',
        last_name: 'Arnold'
      },
      {
        first_name: 'Robert',
        last_name: 'Carpenter'
      },
    ];
    this.sort = {field: 'last_name', desc: false};
  }
}