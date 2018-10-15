const mongoose = require('mongoose')

const slideSchema = new mongoose.Schema({
    url: String
})


slideSchema.statics.format = (slide) => {
    return {
        id: slide._id,
        url: slide.url
    }
}

const Slide = mongoose.model('Slide', slideSchema)

module.exports = Slide