const slidesRouter = require('express').Router()
const Slide = require('../models/slide')

slidesRouter.get('/', async (request, response) => {
    try {
        const slides = await Slide
        .find({})
        response.json(slides.map(Slide.format))
    } catch (e) {
        console.log(e)
        response.status(404)
    }
})

slidesRouter.post('/', async (request, response) => {
    try {
        const body = request.body

        const slide = new Slide({
            url: body.url
        })
        const result = await slide.save()
        response.status(200).json(Slide.format(result))
    } catch (e) {
        console.log(e)
    }
})

slidesRouter.delete('/:id', async (request, response) => {
    try {
        await Slide.findByIdAndRemove(request.params.id)
        response.status(204).end()
    } catch (e) {
        console.log(e)
        response.status(400).send({ error: 'malformatted id' })
    }
})

module.exports = slidesRouter