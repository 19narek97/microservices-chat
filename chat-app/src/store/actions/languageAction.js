import {CHANGE_LANGUAGE} from "../actionTypes/languageTypes"

const change_language = (data) => {
    return {
        type: CHANGE_LANGUAGE, payload : data
    }
}

export default change_language