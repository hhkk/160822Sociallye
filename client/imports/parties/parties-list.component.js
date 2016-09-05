"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var angular2_meteor_accounts_ui_1 = require('angular2-meteor-accounts-ui');
var parties_collection_1 = require('../../../both/collections/parties.collection');
var parties_form_component_1 = require('./parties-form.component');
var parties_list_component_html_1 = require('./parties-list.component.html');
var PartiesListComponent = (function () {
    function PartiesListComponent() {
    }
    PartiesListComponent.prototype.ngOnInit = function () {
        this.parties = parties_collection_1.Parties.find();
    };
    PartiesListComponent.prototype.removeParty = function (party) {
        parties_collection_1.Parties.remove(party._id);
    };
    PartiesListComponent = __decorate([
        core_1.Component({
            selector: 'parties-list',
            template: parties_list_component_html_1["default"],
            directives: [parties_form_component_1.PartiesFormComponent, router_1.ROUTER_DIRECTIVES, angular2_meteor_accounts_ui_1.LoginButtons]
        })
    ], PartiesListComponent);
    return PartiesListComponent;
}());
exports.PartiesListComponent = PartiesListComponent;
//# sourceMappingURL=parties-list.component.js.map