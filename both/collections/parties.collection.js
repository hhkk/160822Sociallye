"use strict";
var mongo_1 = require('meteor/mongo');
exports.Parties = new mongo_1.Mongo.Collection('parties');
function loggedIn() {
    return !!Meteor.user();
}
exports.Parties.allow({
    insert: loggedIn,
    update: loggedIn,
    remove: loggedIn
});
