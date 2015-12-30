import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Route} from 'angular2/router';
import {Episodes} from './shows/episodes';
import {SearchShows} from './shows/searchShows';
import {SubscribedShows} from './shows/subscribedShows';
import {Navbar} from './navbar';

@Component({
  selector: 'app',
  directives: [ROUTER_DIRECTIVES, Navbar],
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
  new Route({path: '/add', component: SearchShows, name: 'Search'}),
  new Route({path: '/episodes/:id', component: Episodes, name: 'Episodes'}),
  new Route({path: '/', component: SubscribedShows, name: 'Subscribed'})
])
export class App {}