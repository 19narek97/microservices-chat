import {CHANGE_LANGUAGE} from "../actionTypes/languageTypes"

const initialState = {
    language: "EN", /* EN || AM */
}

const languageReducer = (state = initialState,{type,payload}) => {
    switch (type) {
        case CHANGE_LANGUAGE:
            return {
                ...state,
                language: payload
            }
        default:
            return state
    }
}

export default languageReducer