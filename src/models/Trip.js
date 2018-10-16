const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema

const TripSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'driver'
    },
    trip_start: {
        type: String
    },
    trip_end: {
        type: String
    },
    distance_traveled: {
        type: Number
    }
});

module.exports = Trip = mongoose.model('trip',Tripchema);