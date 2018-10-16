const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema

const DriverSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    date:{
        type: Date,
        default: Date.now()
    },
});

module.exports = Driver = mongoose.model('driver',DriverSchema);