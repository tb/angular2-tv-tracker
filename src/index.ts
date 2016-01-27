/// <reference path="../typings/tsd.d.ts" />

import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {App} from './app/components/app';
import * as providers from './app/providers/providers';

import 'bootstrap/scss/bootstrap.scss';

bootstrap(App, [HTTP_PROVIDERS, ROUTER_PROVIDERS, Object.values(providers)]);