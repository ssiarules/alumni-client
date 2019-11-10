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

