var mongo = require("mongoose");
var schema = new mongo.Schema({
	// name: 'AMIT',
	rad: {type: Number, default: 0},
	rad2: {type: Number, default: 0},
	rad12: {type: Number, default: 0},
	rad22: {type: Number, default: 0},
	count: {type: Number, default: 6}
});

module.exports = new mongo.model("rateus", schema);
