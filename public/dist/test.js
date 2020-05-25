'use strict';

var sentences = [{ subject: 'Python', verb: 'is', object: 'snakey' }, { subject: 'Mice', verb: 'are', object: 'small' }];
// es6 feature: object destructuring
function say(_ref) {
	var subject = _ref.subject,
	    verb = _ref.verb,
	    object = _ref.object;

	// es6 feature: template strings
	// note that the quotes below are backticks (`), not single quotes (')
	console.log(subject + ' ' + verb + ' ' + object);
}
// es6 feature: for .. of 
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = sentences[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var s = _step.value;

		say(s);
	}
} catch (err) {
	_didIteratorError = true;
	_iteratorError = err;
} finally {
	try {
		if (!_iteratorNormalCompletion && _iterator.return) {
			_iterator.return();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
}