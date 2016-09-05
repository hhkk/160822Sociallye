"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var tracker_1 = require('meteor/tracker');
var meteor_1 = require('meteor/meteor');
var parties_collection_1 = require('../../../both/collections/parties.collection');
var party_details_component_html_1 = require('./party-details.component.html');
var PartyDetailsComponent = (function () {
    function PartyDetailsComponent(route, ngZone) {
        this.route = route;
        this.ngZone = ngZone;
    }
    PartyDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .map(function (params) { return params['partyId']; })
            .subscribe(function (partyId) {
            _this.partyId = partyId;
            tracker_1.Tracker.autorun(function () {
                _this.ngZone.run(function () {
                    _this.party = parties_collection_1.Parties.findOne(_this.partyId);
                });
            });
        });
    };
    PartyDetailsComponent.prototype.saveParty = function () {
        if (meteor_1.Meteor.userId()) {
            parties_collection_1.Parties.update(this.party._id, {
                $set: {
                    name: this.party.name,
                    description: this.party.description,
                    location: this.party.location
                }
            });
        }
        else {
            alert('Please log in to change this party');
        }
    };
    PartyDetailsComponent = __decorate([
        core_1.Component({
            selector: 'party-details',
            template: party_details_component_html_1["default"],
            directives: [router_1.ROUTER_DIRECTIVES]
        })
    ], PartyDetailsComponent);
    return PartyDetailsComponent;
}());
exports.PartyDetailsComponent = PartyDetailsComponent;
//# sourceMappingURL=party-details.component.js.map