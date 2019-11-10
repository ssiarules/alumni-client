
import { FETCH_ALUMNUS,NEW_ALUMNI } from '../actions/types';

const initialState = {
    alumnus: [],
    alumni: {}
}

export default function(state = initialState,action) {
    switch (action.type) {
        case FETCH_ALUMNUS:
            return {
                ...state,
                alumnus: action.payload
            };
        case NEW_ALUMNI:
            return {
                ...state,
                alumni: action.paylod
            };
        default:
            return state;
    }
}






/*
export default (state = {
    alumnus:
        [{
            'name': 'testing1',
            'yearGraduated': 2019,
            'college': 'Testing University',
            'profession': 'testing sport',
            'currentlyLiving': 'testing city',
            'hobbies': 'sleep'
        }],loading: false
},
    action) => {
    switch (action.type) {
        case 'LOADING_ALUMNUS':
            return {
                ...state,
                loading: true,
                alumnus: action.payload
            }


        default:
            return state
    }
}
*/

