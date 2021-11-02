const { request } = require('express');
const mongoose = require('mongoose');

// database schema of request project
const requestSchema = new mongoose.Schema({
    projectID: {
        type: String,
        required: true
    },

    collaboratorID: {
        type: String,
        required: true
    },
    requestStatus: {
        type: Number,
        default: 0 // 0 -> Not requested, 1 -> Requested
    },
    selected: {
        type: Number,
        default: 0 // 0 -> Not selected, 1 -> Selected
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Request", requestSchema, 'tblRequests');