import { Component } from '@angular/core';
<<<<<<< HEAD
import { ROUTER_DIRECTIVES } from '@angular/router';
=======
import { Mongo } from 'meteor/mongo';

import { Parties }   from '../both/collections/parties.collection';
import { PartiesFormComponent } from './imports/parties/parties-form.component';
>>>>>>> 6aa914201db6b6db42910272547620422409e83c

import template from './app.component.html';

@Component({
    selector: 'app',
    template,
<<<<<<< HEAD
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {}
=======
    directives: [PartiesFormComponent]
})
export class AppComponent {
    parties: Mongo.Cursor<any>;

    constructor() {
        this.parties = Parties.find();
    }

    removeParty(party) {
        Parties.remove(party._id);
    }
}
>>>>>>> 6aa914201db6b6db42910272547620422409e83c
