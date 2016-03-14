import {bootstrap}    from 'angular2/platform/browser'
import {provideStore} from '@ngrx/store'
import {AppComponent} from './app.component'

import {counter} from './counter';

bootstrap(AppComponent, [ provideStore({counter}, {counter: 0}) ]);