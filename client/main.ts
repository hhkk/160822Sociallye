import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { AppComponent } from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';

bootstrap(AppComponent, [
    disableDeprecatedForms(),
<<<<<<< HEAD
    provideForms(),
    APP_ROUTER_PROVIDERS
=======
    provideForms()
>>>>>>> 6aa914201db6b6db42910272547620422409e83c
]);
