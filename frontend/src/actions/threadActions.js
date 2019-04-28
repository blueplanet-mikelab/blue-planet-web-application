import axios from 'axios';
import { GET_ERRORS, ADD_THREAD } from '../actions/types'

// Add thread
export const addThread = threadData => dispatch => {
    axios
        .post('/forums/add', threadData)
        .then(res => console.log(res.data))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
    )
    return {
        type: ADD_THREAD,
        payload: threadData
    };
}