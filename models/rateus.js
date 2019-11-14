var mongo = require("mongoose");
var schema = new mongo.Schema({
	// name: 'AMIT',
	rad: {type: Number, default: 5},
	rad2: {type: Number, default: 5},
	rad12: {type: Number, default: 5},
	rad22: {type: Number, default: 3}
});

module.exports = new mongo.model("rateus", schema);
