import axios from 'axios'
const baseUrl = '/api/slides'

const getAll = async () => {
    const request = await axios.get(baseUrl)
    return request.data
}


const create = async (newSlide) => {
    const response = await axios.post(baseUrl, newSlide)
    return response.data
}

const remove = async (id) => {
    const response = await axios.delete(baseUrl + '/' + id)
    return response.data
}

export default { getAll, create, remove}