import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			min: 3,
			max: 20,
		},
		email: {
			type: String,
			required: true,
			min: 6,
		},
		password: {
			type: String,
			min: 6,
		},
		avatar: {
			type: String,
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

const PostSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	desc: {
		type: String,
		required: true,
	},
	img: {
		type: String,
	},
	userId: {
		type: String,
		required: true,
	},
	slug: {
		type: String,
		required: true,
		unique: true,
	},
});

export const User = mongoose.models.User || mongoose.model('User', UserSchema);
export const Post = mongoose.models.Post || mongoose.model('Post', PostSchema);
