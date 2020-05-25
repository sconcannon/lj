'use strict'
const sentences = [
	{ subject: 'Python', verb: 'is', object: 'snakey' },
	{ subject: 'Mice', verb: 'are', object: 'small' },
];
// es6 feature: object destructuring
function say({ subject, verb, object }) {
	// es6 feature: template strings
	// note that the quotes below are backticks (`), not single quotes (')
	console.log(`${subject} ${verb} ${object}`);
}
// es6 feature: for .. of 
for(let s of sentences) {
	say(s);
}
