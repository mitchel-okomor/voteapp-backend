const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
    name: String,
    voteType: {type:String, required:true},
    token: {type:String, index:true, unique:true, required:true},
});

mongoose.model("vote", voteSchema);
