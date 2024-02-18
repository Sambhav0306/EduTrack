import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const courseSchema = new Schema({
	id: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	topics: [
		{
			title: {
				type: String,
				required: true,
			},
			items: [
				{
					title: {
						type: String,
						required: true,
					},
					vid: {
						type: String,
					},
					pl: {
						type: String,
						required: true,
					},
				},
			],
		},
	],
});

export default mongoose.model('Course', courseSchema);
