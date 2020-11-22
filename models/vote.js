const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
    name: String,
    voteType: String
});

mongoose.model("vote", voteSchema);
