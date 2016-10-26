/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';

let s = 'E.test hbk161018testTest.test.ts';

console.log (s);

if (Meteor.isServer) {
    describe('my modulehk2', () => {
        describe('methodsxxxxxxxxxxxxxxxxxxx    ', () => {
            let t = 'isserver ' + s;
            console.log ("-----------------" + t);
            it('x.E.:' + t, () => {
                console.log (t + " some test");
            });
        });
    });

    describe('my modulehk2', function()  {
        describe('methods', function () {
            let t = 'isserver ' + s;
            console.log (t);
            it('x.E.:' + t, () => {
            });
        });
    });
}

if (Meteor.isClient) {
    describe('Tasks', () => {
        describe('methods', () => {
            let t = 'isclient ' + s;
            console.log (t);
            it('y:' + t, () => {
            });
        });
    });
}

describe('Tasks', () => {
    describe('methods', () => {
        let t = 'is if ' + s;
        console.log (t);
        it('z:' + t, () => {
        });
    });
});
