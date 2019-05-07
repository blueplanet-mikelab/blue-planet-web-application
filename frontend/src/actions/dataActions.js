import axios from 'axios';

export const getTopCountries = async() => {
    let data = await axios.get('/maps/topCountries')
    return data.data
}

export const getSmartData = async() => {
    let data = await axios.get('/explores/')
    return data.data
}