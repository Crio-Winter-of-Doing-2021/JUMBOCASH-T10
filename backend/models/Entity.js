const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const entitySchema = new Schema({
      username: String,
      userType: String,
      host: { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
      }
});

const Entity = mongoose.model("Entity",entitySchema);

module.exports = Entity;