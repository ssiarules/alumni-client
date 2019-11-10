export const getAlumnus = () => {
    return dispatch => {
        dispatch({ type: 'LOADING_ALUMNUS' }) //example //thunk - asynchronous action being used to get the API data 
        return (
            fetch('/alumnus')
                .then(resp => resp.json()) //invoke
                .then(alumnus => dispatch({ type: 'LOADED_ALUMNUS',payload: alumnus }))
        )
    }
}