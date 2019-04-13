var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({

    username: String,
    password: String,

    firstName: String,
    middleName: String,
    lastName: String,
    gender: {
        type: String,
        enum: ['M', 'F']
    },
    dateOfBirth: Date,

    countryRegion: String,
    address: String,
    city: String,
    stateOrProvince: String,
    postalCode: String,

    email: String,
    phone: String,

    role: {
        type: String,
        enum : ['User', 'Admin'],
        default: 'User'
    },
    dateCreated: {type: Date, default: Date.now()},
    // facebook identity of the user
    facebook: {
        id: String,
        token: String
    }
}, {collection: 'user'});

module.exports = userSchema;
