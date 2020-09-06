/**
 * Экшены нужны для упрощения понимания и у меньшения конструкций кода.
 * Диспатч используется с thunk мидлваре для асинхронных запросов
 * Акшены возвращают объект с type & payload
 * type - название действия
 * payload - новые данные
 */



import {CHANGE_THEME, DECREMENT, DISABLE_BTN, ENABLE_BTN, INCREMENT} from "./types";


export function increment() {
    return {type: INCREMENT}
}

export function decrement() {
    return {type: DECREMENT}
}

export function asynkIncrement() {
    return function (dispatch) {
        dispatch(buttonDisable())
        setTimeout(() => {
            dispatch(increment())
            dispatch(buttonEnable())
        }, 3000)
    }
}

export function changeTheme(newTheme) {
    return {type: CHANGE_THEME, payload: newTheme}
}

export function buttonDisable() {
    return {type: DISABLE_BTN}
}

export function buttonEnable() {
    return {type: ENABLE_BTN}
}