/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import {Parties} from "../../both/collections/parties.collection";
import { Party } from '../../both/interfaces/party.interface';

import { chai } from 'meteor/practicalmeteor:chai';

let s = 'D.test hbk161018testTest.test.ts';

console.log (s);

if (Meteor.isServer) {
    describe('Tasks', () => {
        describe('methods', () => {
            let t = 'isserver ' + s;
            console.log (t);
            it('x:' + t, () => {
            });
        });
    });
}

if (Meteor.isClient) {
    describe('Tasks', () => {
        describe('methods', () => {
            let t = 'isclient ' + s;
            //console.log (t);
            //alert ('pre test client Parties.insert');
            var testObj = {a:'1',b:'2',c:'3'};
            var x = Object.assign({}, testObj, {'hkbc':'hk8'}, { owner: Meteor.userId() },{testing:'testing'},{bk:'byzztt'},{time:new Date()});
            var tf = function () {
                console.log('in t!!');
            }

            Parties.insert(x, tf);
            let p:Party = Parties.findOne({hkbc:'hk8'});
            console.log ('after test client Parties.insert p:' + p);
            //alert ('after test client Parties.insert p:' + p);
            it('y:' + t, () => {
                console.log ('hhhhhhhhhhhhhhhhhhhhhhh');
            });
        });
    });
}

describe('Tasks hbk161013Dtestclient', () => {
    describe('methodsxxxx4', () => {
        let t = 'is if ' + s;
        console.log (t);
        it('======================z:' + t, () => {
            console.log ('ggggggggggggggggg1');
            //chai.assert('zzzz', true);
            chai.assert(false, 'ttt2');
            //chai.assert(false);
            //chai.assert(false);
            console.log ('ggggggggggggggggg2');
        });
    });
});
