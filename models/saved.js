const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {type: String, required: true},
    enchant: {type: String, required: true},
    price: {type: String, required: true},
    rise: {type: String, required: true},
    pic: {type: String, required: true}
});

const Items = mongoose.model("Items", itemSchema);

module.exports = Items;