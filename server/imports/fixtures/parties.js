"use strict";
var parties_collection_1 = require('../../../both/collections/parties.collection');
function loadParties() {
    if (parties_collection_1.Parties.find().count() === 0) {
        var parties = [
            {
                name: 'Dubstep-Free Zone',
                description: 'Can we please just for an evening not listen to dubstep.',
                location: 'Palo Alto'
            },
            {
                name: 'All dubstep all the time',
                description: 'Get it on!',
                location: 'Palo Alto'
            },
            {
                name: 'Savage lounging',
                description: 'Leisure suit required. And only fiercest manners.',
                location: 'San Francisco'
            }
        ];
        parties.forEach(function (party) { return parties_collection_1.Parties.insert(party); });
    }
}
exports.loadParties = loadParties;
//# sourceMappingURL=parties.js.map