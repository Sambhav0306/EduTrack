import Course from '../models/course.js';

exports.getDSA = (req, res, next) => {
	Course.findById({ id: 'dsa' }).then(course => {
		console.log(course);
	});
};
