import { combineReducers } from 'redux'
import mainAlumniReducer from './alumniReducer'
import mainStudentReducer from './studentReducer'

export default combineReducers({
    mainAlumniReducer: alumniReducer
    mainStudentReducer: studentReducer
})