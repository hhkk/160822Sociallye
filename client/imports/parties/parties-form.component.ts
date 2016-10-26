import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Meteor } from 'meteor/meteor';

import { Parties } from '../../../both/collections/parties.collection';
import { Users2 } from '../../../both/collections/users2.collection';
import { Party } from '../../../both/interfaces/party.interface';

import template from './parties-form.component.html';

@Component({
    selector: 'parties-form',
    template,
    directives: [REACTIVE_FORM_DIRECTIVES]
})
export class PartiesFormComponent implements OnInit {
    addForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.addForm = this.formBuilder.group({
            name: ['', Validators.required],
            description: [],
            location: ['', Validators.required],
            public: [false]
        });
    }

    resetForm() {
        this.addForm.controls['name']['updateValue']('');
        this.addForm.controls['description']['updateValue']('');
        this.addForm.controls['location']['updateValue']('');
        this.addForm.controls['public']['updateValue'](false);
    }

    addParty() {
        alert ('in addparty 2');
        if (this.addForm.valid) {
            if (Meteor.userId()) {
                alert ('pre add party   2 ');
                // Parties.insert(Object.assign({}, this.addForm.value, { owner: Meteor.userId() }));
                // works Parties.insert(Object.assign({}, this.addForm.value));
                //Parties.insert(Object.assign({}, this.addForm.value, { owner: Meteor.userId() },{hk:'yyzztt'}));

                var testObj = {a:'1',b:'2',c:'3'};
                var testObj2 = {d:'1',e:'2',f:'3'};

                Parties.insert(Object.assign({}, this.addForm.value, { owner: Meteor.userId() },{hk:'yyzztt'},{bk:'byzztt'},{time:new Date()}));
                //Parties.insert(Object.assign({}, {hk6:'hk2'}, testObj, testObj, testObj, testObj, testObj2, this.addForm.value, { owner: Meteor.userId() },{hk:'yyzztt'},{bk:'byzztt'},{time:new Date()}));
                let p:Party = Parties.findOne({hk6:'hk2'});
                console.log (p);

                alert ('post add party2');
                //works Users2.insert(Object.assign({}, this.addForm.value, { owner: Meteor.userId() }));

                // XXX will be replaced by this.addForm.reset() in RC5+
                this.resetForm();
            } else {
                alert('Please log in to add a party');
            }
        }
    }
}
