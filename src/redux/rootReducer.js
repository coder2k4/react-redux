/**
 * Обарабтывает экшены и выполняет нужные действия для преобразования state
 */

import {CHANGE_THEME, DECREMENT, DISABLE_BTN, ENABLE_BTN, INCREMENT} from "./types";
import {combineReducers} from "redux";


function counterReducer(state = 0, action) {
    if (action.type === INCREMENT)
        return ++state
    else if (action.type === DECREMENT)
        return --state
    else
        return state
}


const initThemeState =  {
    value: 'light',
    disable : false
}

function themeReducer(state = initThemeState, action) {
    switch (action.type) {
        case CHANGE_THEME :
            return {...state, value: action.payload}
        case ENABLE_BTN :
            return {...state, disable: false}
        case DISABLE_BTN :
            return {...state, disable: true}
        default:
            return state
    }

}

const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer
})

export default rootReducer