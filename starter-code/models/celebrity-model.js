const mongoose     = require('mongoose');
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  name: { type: String },
  ocupation: { type: String },
  catch_phrase: { type: String },
})

const Celebrity = mongoose.model("Celebrity", celebritySchema);

module.exports = Celebrity;