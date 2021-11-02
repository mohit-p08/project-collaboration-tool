const mongoose = require('mongoose');

// database chema of profile
const profileSchema = new mongoose.Schema({
    creator: {
        type: String
    },
    institute: {
        type: String,
        required: [true, "Please enter your Institute"]
    },
    department: {
        type: String,
        required: [true, "Please enter your Department"]
    },
    contact: {
        type: String,
        required: [true, "Please enter your contact number"]
    },
    github: {
        type: String
    },
    linkedIn: {
        type: String
    },
    areaOfInterest: {
        type: [String]
    },
    // to check if a user is logging in first time or not
    flag: {
        type: Number,
        default: 0 // 0 -> first time login, 1 -> regular
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Profile", profileSchema, 'tblProfiles');