'use strict';

const _ = require('underscore');

const sentences = [
    { subject: 'Javascript', verb: 'is', object: 'great' },
    { subject: 'Elephants', verb: 'are', object: 'large' }
];
// es6 feature: object destructuring
function say({subject, verb, object}) {
    //es6 feature: template strings
    // note that quotes below are backticks (`), not single quotes (')
    console.log(`${subject} ${verb} ${object}.`)
}

const verbs = _.pluck(sentences, 'verb');
for(let verb of verbs) {
    console.log(`found verb: ${verb}`);
}
for(let s of sentences) {
    say(s);
}