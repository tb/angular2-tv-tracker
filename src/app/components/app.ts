import {Component} from 'angular2/core';
import {COMMON_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES, RouteConfig, Route} from 'angular2/router';
import {UsersIndex} from './users/usersIndex';
import {Episodes} from './shows/episodes';
import {SearchShows} from './shows/searchShows';
import {SubscribedShows} from './shows/subscribedShows';
import {Navbar} from './navbar';
import {SortableHeader} from './ui/sortableHeader';

@Component({
  selector: 'app',
  directives: [COMMON_DIRECTIVES, ROUTER_DIRECTIVES, Navbar, SortableHeader],
  template: `
    <navbar></navbar>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .container {
      padding-top: 70px;
    }
  `]
})
@RouteConfig([
  new Route({path: '/users', component: UsersIndex, name: 'Users'}),
  new Route({path: '/add', component: SearchShows, name: 'Search'}),
  new Route({path: '/episodes/:id', component: Episodes, name: 'Episodes'}),
  new Route({path: '/', component: SubscribedShows, name: 'Subscribed'})
])
export class App {}