import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { Tracker } from 'meteor/tracker';

import { Parties } from '../../../both/collections/parties.collection';

import template from './party-details.component.html';

@Component({
    selector: 'party-details',
  template
})
export class PartyDetailsComponent implements OnInit {
    partyId: string;
    party: any;

    constructor(private route: ActivatedRoute, private ngZone: NgZone) {}

    ngOnInit() {
        this.route.params
            .map(params => params['partyId'])
            .subscribe(partyId => {
                this.partyId = partyId;

                Tracker.autorun(() => {
                    this.ngZone.run(() => {
                        this.party = Parties.findOne(this.partyId);
                    });
                });
            });
    }

    saveParty() {
        console.log ('hk saving saveParty');
        Parties.update(this.party._id, {
            $set: {
                name: this.party.name,
                description: this.party.description,
                location: this.party.location
            }
        });
        // hbk


    }
}
