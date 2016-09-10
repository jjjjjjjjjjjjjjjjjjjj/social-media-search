import 'core-js/es6';
import 'core-js/es7/reflect';
import '../shims/shims_for_IE';
require('zone.js/dist/zone');
import 'ts-helpers';

import { enableProdMode }   from '@angular/core';
import { bootstrap }        from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS }   from '@angular/http';

import { AppComponent }     from './app.component';

declare let __PRODUCTION__: any;

if (__PRODUCTION__) {
  enableProdMode();
} else {
  require('zone.js/dist/long-stack-trace-zone');
}

bootstrap(
    AppComponent,
    [
        HTTP_PROVIDERS
    ]
);
