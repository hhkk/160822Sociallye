import {Mongo} from 'meteor/mongo';

import {User2} from '../interfaces/user2.interface';

export const Users2 = new Mongo.Collection<User2>('users2');

function loggedIn() {
    return !!Meteor.user();
}

Users2.allow({
    insert: loggedIn,
    update: loggedIn,
    remove: loggedIn
});
