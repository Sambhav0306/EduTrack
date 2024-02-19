import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();

import courseRoutes from './routes/courses.js';

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/courses', courseRoutes);

mongoose
	.connect(
		'mongodb+srv://geekyradhe11:x0nghwJNLiaHEBoI@cluster0.hem2az7.mongodb.net/EduTrack?retryWrites=true&w=majority'
	)
	.then(result => {
		console.log('Connected!');
		app.listen(3000);
	})
	.catch(err => {
		console.log(err);
	});
