import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Mongo } from 'meteor/mongo';

import { LoginButtons } from 'angular2-meteor-accounts-ui';
import { MeteorComponent } from 'angular2-meteor';

import { Parties }   from '../../../both/collections/parties.collection';
import { Party } from '../../../both/interfaces/party.interface';
import { PartiesFormComponent } from './parties-form.component';



import template
    from './parties-list.component.html';

@Component({
  selector: 'parties-list',
  template,
  directives: [PartiesFormComponent, ROUTER_DIRECTIVES, LoginButtons]
})
export class PartiesListComponent extends MeteorComponent implements OnInit {
  parties: Mongo.Cursor<Party>;
  //alert('in assign');
  hbkhbk: string;
  userhk: Meteor.User;
  users: Mongo.Collection;
  usernamehk: string;
  usernamehk2: string;

  constructor() {
    super();
    alert('pre assign');
    this.hbkhbk = 'hbkhbk4';
    this.users = Meteor.users;
    //this.usernamehk = LoginButtons.prototype.displayName();
    //his.usernamehk = Meteor.user().username;
    //this.usernamehk2 = this.users.findOne({"_id" : "wAJeKr9op8vEt6FMH"});
    this.userhk = Meteor.users.findOne({"_id" : new Mongo.ObjectID("wAJeKr9op8vEt6FMH")});
    //this.userhk = Meteor.users.findOne({"_id" : new Meteor.Collection.ObjectID("wAJeKr9op8vEt6FMH")});
    //this.usernamehk2 = this.users.findOne({"_id" : ObjectId("wAJeKr9op8vEt6FMH")});
    //_id: ObjectId("4ecbe7f9e8c1c9092c000027")


    Meteor.users.find({})
    //this.usernamehk = Meteor.User;

    //alert('post assign');
  }

  ngOnInit() {
      alert('hbk in parties-list.component.ts ngOnInit');
    this.parties = Parties.find();

    this.subscribe('parties', () => {
      alert('hbk in parties-list.component.ts this.subscribe ');
      this.parties = Parties.find();
    }, true);
  }

  removeParty(party) {
    Parties.remove(party._id);
  }

  search(value: string) {
    this.parties = Parties.find(value ? { location: value } : {});
  }
}
