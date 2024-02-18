import Course from '../models/course.js';

export const getDSA = (req, res, next) => {
	Course.findOne({ id: 'dsa' }).then(course => {
		console.log(course);
		res.send(JSON.stringify(course));
		res.end();
	});
};

export const getOS = (req, res, next) => {};

export const getCN = (req, res, next) => {};

export const getDBMS = (req, res, next) => {};

export const getSWE = (req, res, next) => {};
