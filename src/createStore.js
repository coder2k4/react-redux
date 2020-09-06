/**
 * функция соединяет редьюсеры, стейт и подписчиков (паттерн наблюдатель)
 * @param rootReducer
 * @param initialState
 * @returns {{dispatch(*=): void, getState(): *, subscribe(*=): void}|*}
 */


export default function createSrore(rootReducer, initialState) {
    let state = rootReducer(initialState, {type: '__INIT__'});
    const subscribers = []
    return {    //Используем замыкания для доступа к переменным State и subscrivers
        dispatch(action) {
            state = rootReducer(state, action) // передает новый экшен и создаем стейт
            subscribers.forEach(sub => sub()) //вызываем всех подписчиков
        },
        subscribe(callback) {
            subscribers.push(callback)
        },
        getState() {
            return state
        }
    }
}

