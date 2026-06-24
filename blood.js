const mongoose = require("mongoose");

const bloodSchema = new mongoose.Schema({
    donorName: {
        type: String,
        required: true
    },
    bloodGroup: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    unitsAvailable: {
        type: Number,
        required: true
    },
    donationDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Blood", bloodSchema);