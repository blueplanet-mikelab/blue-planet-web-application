import axios from 'axios';

// export const getTopCountries = async() => {
//     var promise = new Promise((resolve, reject) => {
//         axios
//             .get('/explores/')
//             .then(res => resolve(res.data))
//     })
//     return promise
// }

export const getTopCountries = async() => {
    let data = await axios.get('/explores/')
    return data.data
}