import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Mongo } from 'meteor/mongo';
import { LoginButtons } from 'angular2-meteor-accounts-ui';
import { MeteorComponent } from 'angular2-meteor';

import { Parties }   from '../../../both/collections/parties.collection';
import { Party } from '../../../both/interfaces/party.interface';
import { PartiesFormComponent } from './parties-form.component';

import { Users2 } from '../../../both/collections/users2.collection';



import template from './parties-list.component.html';
import {BothUtilGetMongoCollectionIterate} from "../../../both/utlities/BothUtilGetMongoCollectionIterate";
import {UtilErrorHandling} from "../../../both/utlities/UtilErrorHandling";

@Component({
  selector: 'parties-list',
  template,
  directives: [PartiesFormComponent, ROUTER_DIRECTIVES, LoginButtons]
})
export class PartiesListComponent extends MeteorComponent implements OnInit {
  parties: Mongo.Cursor<Party>;
  //alert('in assign');
  hbkhbk: string;
  hbkemail: string;
  hbkuserid: string;
  currentUsername: string;
  private hbkemailremote: string;
  userhk: Meteor.User;
  idxhbk: number;
  idxhbkArray:any;
  idxhbkInstance: String;

  //users: Mongo.Collection;
  usernamehk: string;
  usernamehk2: string;

  constructor() {
    super();
    //alert('pre assign');
    this.hbkhbk = 'hbkhbk4';
    //this.users = Meteor.users;
    //this.usernamehk = LoginButtons.prototype.displayName();
    //his.usernamehk = Meteor.user().username;
    //this.usernamehk2 = this.users.findOne({"_id" : "wAJeKr9op8vEt6FMH"});
    //this.userhk = Meteor.users.findOne({"_id" : new Mongo.ObjectID("wAJeKr9op8vEt6FMH")});
    //this.userhk = Meteor.users.findOne({"_id" : "wAJeKr9op8vEt6FMH"});
    this.userhk = Meteor.users.findOne({"name" : "hkon"});
    //this.duserhk = Meteor.users.findOne("wAJeKr9op8vEt6FMH");
    //this.duserhk = Meteor.user();
    var w = 2;
    console.log ('w:' + w);
    //var mu1 = Meteor.user;
    //console.log ('mu1:' + mu1);
    //var mu2 = Meteor.user();
    //console.log ('mu2:' + mu2);
    try  {
      //alert('pre Meteor.users.find().fetch()[0].emails[0].address');
      this.hbkemail = Meteor.users.find().fetch()[0].emails[0].address;
    } catch (e) {
      //console.log ('111 exception during Meteor.users.find().fetch()[0].emails[0].address' + e);
    }
    try  {
      //alert('pre Meteor.users.find().fetch()[0].emails[0].address');
      console.log ('this.hbkemail:' + this.hbkemail);
    } catch (e) {
      alert('222 exception during Meteor.users.find().fetch()[0].emails[0].address' + e);
    }
    //this.hbkemail = 'ddd';
    //console.log ('xx:' + xx);

    //this.userhk = Meteor.users.findOne({"_id" : new Meteor.Collection.ObjectID("wAJeKr9op8vEt6FMH")});
    //this.usernamehk2 = this.users.findOne({"_id" : ObjectId("wAJeKr9op8vEt6FMH")});
    //_id: ObjectId("4ecbe7f9e8c1c9092c000027")
    //console.log ('x:' + x);

    //var y = Meteor.user().profile.fullname;
    //console.log ('y2:' + y);


    Meteor.users.find({})
    //this.usernamehk = Meteor.User;
    this.idxhbk = 1;
    this.idxhbkArray = ["1arr", "2arr"];
    //alert('this.idxhbkArray[this.idxhbk]:' + this.idxhbkArray[this.idxhbk]);

    //alert('post assign');
  }

  ngOnInit() {
    //alert('hbk in parties-list.component.ts ngOnInit');
    //this.parties = Parties.find();

    // while(this.parties.hasNext()) {
    //   item = this.parties.next();
    //   console.log(item); // 9,2,5
    // }

    // this.parties.forEach( )
    //var someArray = [9, 2, 5];
    // for (var item of this.parties) {
    //   console.log(item); // 9,2,5
    // }


    // this.parties.forEach(function(item) {
    //   console.log(item); // 9,2,5
    //   /* do something */
    // });


    // this.subscribe('partieshk22', () => {
    //   //alert('hbk in hkparties22');
    //   //this.parties = Parties.find();
    // }, function(x) {
    //   //alert('in partieshk22 ready' + arguments)
    // });


    // https://www.discovermeteor.com/blog/reactive-joins-in-meteor/
    //Although most publications you’ll come across will usually return a single cursor, it
    // turns out you can just as well return an array of cursors. So let’s try returning both
    // a Post cursor and a Meteor.users cursor in the same publication:

    // this.subscribe('parties', () => {
    //   alert('hbk in parties-list.component.ts this.subscribe ');
    //   this.parties = Parties.find();
    // }, true);

    console.log ('_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+');
    this.subscribe('parties161014', (x) => {
      alert('hbk in parties-list.component.ts parties161014 this.subscribe ');
      this.parties = Parties.find();

      let usersFindFetch2 = Meteor.users.find({_id:'wAJeKr9op8vEt6FMH'}).fetch();

      console.log ('============ usersFindFetch2:' + usersFindFetch2);
      console.log ('============ this.subscribe x:' + x);
      console.log ('this:' + this);
      console.log ('this.parties:' + this.parties);
    }, true);
  }

  removeParty(party) {
    console.log ('hkhkhk:party:'+party)
    console.log ('hkhkhk:party._id:'+party._id)
    Parties.remove(party._id);
  }

  search(value: string) {
    alert('search for:' + value);
    this.parties = Parties.find(value ? { location: value } : {});
  }




  //var idxhbk = 1;
  //var words = ["hello", "yes", "no", "maybe"];

  hbktest (value: string) {

    this.idxhbk++
    this.idxhbkInstance = this.idxhbkArray[this.idxhbk % 2];

    BothUtilGetMongoCollectionIterate.testGetParties();
    //alert('done BothUtilGetMongoCollectionIterate');

    //this.hbkemailremote = GetEmailFromUserId.get(Meteor.user()._id);

    var usersFindFetch = null;
    var usersFindFetch2 = null;
    var usersFindFetch3email = null;

    try {
      usersFindFetch = Meteor.users.find().fetch();
      usersFindFetch2 = Meteor.users.find({_id:'wAJeKr9op8vEt6FMH'}).fetch();
      //usersFindFetch3email = Meteor.users.find({_id:'wAJeKr9op8vEt6FMH'}).fetch()[0].emails[0].address;
    this.hbkemail = 'asdasd:' + usersFindFetch[0].emails[0].address;
      this.hbkuserid =  Meteor.user()._id;
      this.userhk = 1;
      this.userhk = Meteor.user();
      this.currentUsername = Meteor.user().username;


    }
    catch (e)
    {
//      console.error(e)
      UtilErrorHandling.logError(e, true);
    }

    console.log ('usersFindFetch2[0]._id:' + usersFindFetch[0]._id);
    console.log ('usersFindFetch[0]._id:' + usersFindFetch[0]._id);
    console.log ('usersFindFetch[0].emails[0].address:' + usersFindFetch[0].emails[0].address);

    for(var i in window) {
      if (window.hasOwnProperty(i))
        console.log(i);
    }

    //alert ('in addparty');

    // if (Meteor.userId()) {
    Parties.insert(Object.assign({}, {hhkk:'hhkkjj'}, { owner: Meteor.userId() }));
    //alert ('post addparty');
    //
    //   // XXX will be replaced by this.addForm.reset() in RC5+
    // } else {
    //   alert('Please log in to add a user');
    // }

    //alert('1this.idxhbkArray:' + this.idxhbkArray);
    //alert('2this.idxhbk % 2:' + this.idxhbk % 2);
    //alert('3this.idxhbkArray[1]:' + this.idxhbkArray[1]);
    //alert('4this.idxhbkArray[this.idxhbk]:' + this.idxhbkArray[this.idxhbk % 2]);

    //alert('this.hbkemail:' + value + ':' + this.hbkemail);
  } // hbktest
}
