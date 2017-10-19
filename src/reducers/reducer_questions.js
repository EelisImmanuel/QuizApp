import {NEW_QUESTION} from '../actions';
import {REHYDRATE} from 'redux-persist/constants'

export default function (state = {}, action) {
    switch (action.type) {
        case NEW_QUESTION:
            return {
                ...state,
                [action.payload.id]: action.payload
            };
        default:
            return state;
    }

}
