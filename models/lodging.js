const mongoose = require('mongoose')

const Lodging = mongoose.model('lodging', {
    name: {
        type: String,
    },
    // start: {
    //     type: String,
    // },
    // end: {
    //     type: String,
    // },
    lodging: {
        type: Number,
    },
    meals: {
        type: Number,
    },
    total: {
        type: Number,
    }
})

module.exports = Lodging

