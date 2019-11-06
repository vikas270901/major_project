var mongo = require("mongoose");

var schema = new mongo.Schema({
pstname : String,
job : String,
date : {type: Date, default: Date.now},
expr : String,
location : String,
description : String,
likes : {type: Number, default: 1},
comments : [
	{
		type: mongo.Schema.Types.ObjectId,
		ref: "user"
	}
]
});
module.exports = new mongo.model("model", schema);