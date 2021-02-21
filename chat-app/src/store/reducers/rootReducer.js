import {combineReducers} from "redux"

/* Reducers */
import languageReducer from "../reducers/languageReducer"

const rootReducer = combineReducers({
    language: languageReducer,

})

export default rootReducer