import { ADD_THREAD } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case ADD_THREAD:
        return [
            ...state,
            {
                thread: action.payload
            }
        ]
        default:
        return state;
    }
}