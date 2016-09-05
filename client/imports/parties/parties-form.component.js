"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var meteor_1 = require('meteor/meteor');
var parties_collection_1 = require('../../../both/collections/parties.collection');
var parties_form_component_html_1 = require('./parties-form.component.html');
var PartiesFormComponent = (function () {
    function PartiesFormComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    PartiesFormComponent.prototype.ngOnInit = function () {
        this.addForm = this.formBuilder.group({
            name: ['', forms_1.Validators.required],
            description: [],
            location: ['', forms_1.Validators.required]
        });
    };
    PartiesFormComponent.prototype.resetForm = function () {
        this.addForm.controls['name']['updateValue']('');
        this.addForm.controls['description']['updateValue']('');
        this.addForm.controls['location']['updateValue']('');
    };
    PartiesFormComponent.prototype.addParty = function () {
        if (this.addForm.valid) {
            if (meteor_1.Meteor.userId()) {
                parties_collection_1.Parties.insert(Object.assign({}, this.addForm.value, { owner: meteor_1.Meteor.userId() }));
                // XXX will be replaced by this.addForm.reset() in RC5+
                this.resetForm();
            }
            else {
                alert('Please log in to add a party');
            }
        }
    };
    PartiesFormComponent = __decorate([
        core_1.Component({
            selector: 'parties-form',
            template: parties_form_component_html_1["default"],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES]
        })
    ], PartiesFormComponent);
    return PartiesFormComponent;
}());
exports.PartiesFormComponent = PartiesFormComponent;
//# sourceMappingURL=parties-form.component.js.map