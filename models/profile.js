var mongo = require("mongoose");

var schema = new mongo.Schema({
		ide: String,
		name: String,
		gender: String,
		protype: String,
		location: String,
		expr: String,
		image:String,
		work: String,
		home: String,
		contact: String,
		mail: String,
		dob: String,
		about: String,
		status : {type: Number, default: 1},
		likes : {type: Number, default: 1},
		comments : [
			{
				type: mongo.Schema.Types.ObjectId,
				ref: "user"
			}
		]
});
module.exports = new mongo.model("profile", schema);
