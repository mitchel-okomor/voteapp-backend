const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
    vote: String,
});

mongoose.model("vote", voteSchema);
