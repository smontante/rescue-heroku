const mongoose = require('mongoose')

const Lodging = mongoose.model('lodging', {
    start: {
        type: Date,
    },
    end: {
        type: Date,
    },
    zip: {
        type: Number,
    }
})

module.exports = Lodging

