import {Parties} from '../../../both/collections/parties.collection';
import {Users2} from '../../../both/collections/users2.collection';
import {Meteor} from 'meteor/meteor';

function buildQuery(partyId?: string): Object {
  const isAvailable = {
    $or: [
      { 'public': true },
      {
        $and: [
          { owner: this.userId },
          { owner: { $exists: true } }
        ]
      }
    ]
  };

  if (partyId) {
    return { $and: [{ _id: partyId }, isAvailable] };
  }

  return isAvailable;
}

Meteor.publish('parties', function() {
  return Parties.find(buildQuery.call(this));
});

// from https://www.discovermeteor.com/blog/reactive-joins-in-meteor/
// Meteor.publish('topPostsWithTopComments', function() {
//   // first, get the top 30 posts
//   var topPostsCursor = Posts.find({}, {sort: {score: -1}, limit: 30});
//   // then extract those posts' userIds
//   var userIds = topPostsCursor.map(function(p) { return p.userId });
//
//   // then return an array containing both the posts, and their corresponding comments
//   return [
//     topPostCursor,
//
//   ];Meteor.users.find({_id: {$in: userIds}});
// });

// from https://www.discovermeteor.com/blog/reactive-joins-in-meteor/
Meteor.publish('parties161014', function() {
  //let x = [Parties.find(buildQuery.call(this))];
  let x = [Parties.find(buildQuery.call(this)), Users2.find()];
  return x;
 // return Parties.find(buildQuery.call(this));
  // // first, get the top 30 posts
  // var topPostsCursor = Posts.find({}, {sort: {score: -1}, limit: 30});
  // // then extract those posts' userIds
  // var userIds = topPostsCursor.map(function(p) { return p.userId });
  //
  // // then return an array containing both the posts, and their corresponding comments
  // return [
  //   topPostCursor,
  //   Meteor.users.find({_id: {$in: userIds}});
  // ];
});







Meteor.publish('partieshk22', function() {
  console.log ('hbk================================')

  Meteor.users.find({_id:'wAJeKr9op8vEt6FMH'}).fetch()[0].emails[0].address;








  return [
    Users2.find(),
    //Parties.find()
    //Rooms.find({_id: roomId}, {fields: {secretInfo: 0}}),
    //Messages.find({roomId: roomId})
  ];

  //return Users2.find()

  //return Parties.find(buildQuery.call(this));
  //return 'himomanddad';
});

Meteor.publish('party', function(partyId: string) {
  return Parties.find(buildQuery.call(this, partyId));
});


